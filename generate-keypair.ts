import {Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('devnet'));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await connection.getBalance(address);
const balance_sol = balance / LAMPORTS_PER_SOL

console.log(`The balance is at ${address} is ${balance} lamports which is ${balance_sol} SOL.`)