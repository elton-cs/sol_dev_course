import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import * as dotenv from "dotenv";

dotenv.config();

const keypair = getKeypairFromEnvironment('SECRET_KEY');
const publicKey_string = keypair.publicKey.toBase58();
console.log(publicKey_string);

const publicKey = new PublicKey(publicKey_string)

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);