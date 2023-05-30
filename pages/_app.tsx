import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import { AppProps } from 'next/app'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from '@wagmi/core/chains'
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient }: any = configureChains(
  [polygon],
  [alchemyProvider({ apiKey: 'qYUVYYNWeVTTZ67lYTOxm3UzvTg0nC-M' }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Fetch My NFTs",
  chains,
});

const config = createConfig  ({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
   </WagmiConfig>
  );
}

export default MyApp;
