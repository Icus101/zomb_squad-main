import { useMemo } from "react";
import './Banner.css';
import bannerImg from '../../images/banner_img.webp';
import bannerArrow from '../../images/banner-arrow.gif';

import Home from '../wallet/Home';


import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; //

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

function Banner() {

    const endpoint = useMemo(() => clusterApiUrl(network), []);

    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSlopeWallet(),
            getSolflareWallet(),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network })
        ],
        []
    );
    return (
        <section>
            <div className="banner-bg">
                <div className="banner-content">
                    <div className="banner-img">
                        <img src={bannerImg} alt="" />
                    </div>
                    <div className="banner-text">
                        <span>ZOMBSQUAD</span>
                    </div>
                    <div className="banner-btn">
                        <ThemeProvider theme={theme}>
                            <ConnectionProvider endpoint={endpoint}>
                                <WalletProvider wallets={wallets} autoConnect={true}>
                                    <WalletDialogProvider>
                                        <Home
                                            candyMachineId={candyMachineId}
                                            config={config}
                                            connection={connection}
                                            startDate={startDateSeed}
                                            treasury={treasury}
                                            txTimeout={txTimeout}
                                        />
                                    </WalletDialogProvider>
                                </WalletProvider>
                            </ConnectionProvider>
                        </ThemeProvider>

                    </div>
                    <div className="banner-arrow">
                        <img src={bannerArrow} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
