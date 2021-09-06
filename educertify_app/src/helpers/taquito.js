import { TezosToolkit } from "@taquito/taquito";

export const signCert = async (key, fName, lName, certId, date) => {
  const Tezos = new TezosToolkit("https://api.tez.ie/rpc/granadanet");
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
  const Tezos = new TezosToolkit("https://api.tez.ie/rpc/granadanet");
  const contract = await Tezos.contract.at(key);
  const storage = await contract.storage();
  const certId = await storage.namedbigmap.get("certId");
  const fName = await storage.namedbigmap.get("fName");
  const lName = await storage.namedbigmap.get("lName");
  const date = await storage.namedbigmap.get("date");
  return { certId, fName, lName, date };
};
