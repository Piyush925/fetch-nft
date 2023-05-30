import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Nav(): JSX.Element {
  const { isConnected } = useAccount();
  const [isLoggedIn, logIn] = useState(false);

  useEffect(() => {
    if (isConnected) {
      logIn(true);
    } else {
      logIn(false);
    }
  }, [isConnected]);

  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <h1 className={styles.title}>
          Fetch NFT
        </h1>
      </Link>
      {isLoggedIn && (
        <ul className={styles.navItems}>
          <li>
            <ConnectButton />
          </li>
        </ul>
      )}
    </div>
  );
}