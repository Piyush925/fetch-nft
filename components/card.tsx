import { useState } from "react";
import styles from "../styles/Card.module.css";

export type CardPropsType = {
  uri: {
    metadata: string;
  };
};

type NftType = {
  name: string;
  image: string;
};

export default function Card(props: CardPropsType): JSX.Element {
  const [nft, setNft] = useState<NftType>(JSON.parse(props.uri.metadata));

  return (
    nft?.name ? (
      <section className={styles.cardContainer}>
         {nft?.image && <img src={nft?.image} alt="NFT" />}
        {nft?.name && <h1>{nft.name}</h1>}
      </section>
    ) : <></>
  );
}
