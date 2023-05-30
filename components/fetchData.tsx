import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Card from "./card";
import styles from "../styles/FetchData.module.css";

type NFTmetadata = {
  metadata: string;
}

interface NftResponse {
  result: NFTmetadata[];
}

export default function FetchData(): JSX.Element {
  const [data, setData] = useState<NFTmetadata[]>([]);
  const key = 'bn07ynFm5WwMHYFbTcYE1BP1LsYhglWSrcGTv6eEZApgYFERU5cBJ5bfFHoeAUW9';

  const ownerAddr = "0xFe88444bf2dd671cdfC2FDab8c6642df3d2E3970";

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/nft/${ownerAddr}`,
    params: { chain: "polygon", format: "decimal", media_items: true },
    headers: {
      accept: "application/json",
      "X-API-Key": key,
    },
  };

  useEffect(() => {
    axios
      .request<NftResponse>(options)
      .then((response) => {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className={styles.dataContainer}>
      {data.map((nft: NFTmetadata, index) => {
        return <Card uri={nft} key={index} />;
      })}
    </section>
  );
}
