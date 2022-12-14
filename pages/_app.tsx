import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {ThemeProvider} from "next-themes"

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
    <div className="dark:dark-design dark:bg-[#030B29]">
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
