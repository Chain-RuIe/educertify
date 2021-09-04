import { TezosToolkit } from "@taquito/taquito";
import { importKey } from "@taquito/signer";

export const getTaquito = (key) => {
  const taquito = new TezosToolkit("https://granadanet.smartpy.io/");
  const x = importKey(
    taquito,
    key.email,
    key.password,
    key.mnemonic.join(" "),
    key.secret
  )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  console.log("Hello");
  console.log(x);
};
