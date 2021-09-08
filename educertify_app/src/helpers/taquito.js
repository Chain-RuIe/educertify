import { TezosToolkit } from "@taquito/taquito";
import { importKey } from "@taquito/signer";
import code from "./contract_code.json";

// Test Contract: KT1SC9DnAyDHG7KytLkrzKXZtgTqdwCPuVvq

const FAUCET_KEY = {
  mnemonic: [
    "lazy",
    "segment",
    "slot",
    "diagram",
    "orchard",
    "iron",
    "valve",
    "acid",
    "whisper",
    "upon",
    "evolve",
    "object",
    "glimpse",
    "scorpion",
    "exotic",
  ],
  secret: "85a04a50a3dd67211215bab3f0c78ed95d40d43a",
  amount: "25153278272",
  pkh: "tz1X8nRqnEao8mZwz9iba52m4zevkSDMmNiE",
  password: "Czi4kkiFbZ",
  email: "ekvowuoi.uhirwafm@tezos.example.org",
};

export const signCert = async (fName, lName, certId, date, setKey) => {
  const Tezos = new TezosToolkit("https://granadanet.smartpy.io/");
  importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(" "),
    FAUCET_KEY.secret
  );
  await Tezos.contract
    .originate({
      code: code,
      storage: {
        fName,
        lName,
        certId,
        date,
      },
    })
    .then((originationOp) => {
      console.log(
        `Waiting for Confirmation for ${originationOp.contractAddress}`
      );
      setKey(originationOp.contractAddress);
    })
    .then((contract) => {
      console.log("Origination completed.");
    })
    .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
};

export const editCert = async (key, fName, lName, certId, date) => {
  const Tezos = new TezosToolkit("https://granadanet.smartpy.io/");
  importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(" "),
    FAUCET_KEY.secret
  );
  await Tezos.contract
    .at(key)
    .then((contract) => {
      return contract.methods.replace(certId, { fName, lName }, date).send();
    })
    .then((op) => {
      println(`Awaiting for ${op.hash} to be confirmed...`);
      return op.confirmation(3).then(() => op.hash);
    })
    .then((hash) =>
      println(`Operation injected: https://granada.tzstats.com/${hash}`)
    )
    .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));
};

export const getCert = async (key) => {
  const Tezos = new TezosToolkit("https://granadanet.smartpy.io/");
  importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(" "),
    FAUCET_KEY.secret
  );
  const contract = await Tezos.contract.at(key);

  console.log("Contract Get");
  const storage = await contract.storage();
  // const certId = await storage.get("certId");
  // const fName = await storage.get("fName");
  // const lName = await storage.get("lName");
  // const date = await storage.get("date");
  // return { certId, fName, lName, date };
  return { storage };
};

export const getBalance = async (key) => {
  const Tezos = new TezosToolkit("https://granadanet.smartpy.io/");
  Tezos.tz
    .getBalance(key)
    .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
    .catch((error) => console.log(JSON.stringify(error)));
};
