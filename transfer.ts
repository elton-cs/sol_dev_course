import * as web3 from "@solana/web3.js";
import * as dotenv from "dotenv";
import base58 from "bs58";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers"
import { SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";

dotenv.config();

const suppliedToPubkeyKEYPAIR = getKeypairFromEnvironment("SENDER_KEY");
const suppliedToPubkey = suppliedToPubkeyKEYPAIR.publicKey;
// const suppliedToPubkey = "3Rqw9JLZHo3ZEzYvpdTH4hhcVkwyMxtv87tX3L1CggBk";
const toPubkey = new web3.PublicKey(suppliedToPubkey);

console.log(`receiver address: ${suppliedToPubkey}`);


const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new web3.Connection("https://api.devnet.solana.com", "confirmed");

console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);

console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `);
console.log(`Transaction signature is ${signature}!`);