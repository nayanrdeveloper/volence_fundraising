import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {ThemeProvider} from "next-themes"
import Head from 'next/head'


import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
  Chain,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const klaytn: Chain = {
  id: 1001,
  name: "Klaytn Baobab",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY",
  },
  rpcUrls: {
    default: { http: ["https://api.baobab.klaytn.net:8651/"] },
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://baobab.scope.klaytn.com/" },
    default: { name: "SnowTrace", url: "https://baobab.scope.klaytn.com/" },
  },
};

const { chains, provider, webSocketProvider } = configureChains(
  [klaytn],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:(bg-[#030B29])">
      <Head>
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web3,fund,klaytn"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://volence.netlify.app/" />
        <meta
          property="og:title"
          content="Volence mission is to empower people to unite around ideas that matter to them and together make those ideas come to life."
        />
        <meta
          property="og:description"
          content="Volence crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability."
        />
        <meta
          property="og:image"
          content="https://volence.netlify.app/"
        />

        <meta name="language" content="ES" />
        <meta
          name="author"
          content="Nayan Radadiya, nayanrdeveloper@gmail.com"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://volence.netlify.app/" />
        <meta
          property="twitter:title"
          content="Volence mission is to empower people to unite around ideas that matter to them and together make those ideas come to life."
        />
        <meta
          property="twitter:description"
          content="Volence crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability."
        />
        <meta property="twitter:image" content="/logo.png" />

        <meta name="url" content="https://volence.netlify.app/" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Volence crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability."
        />
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>Volence</title>
      </Head>
      <WagmiConfig client={client}>
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
