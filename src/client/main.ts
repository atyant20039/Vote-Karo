/**
 * Hello world
 */

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayHello,
  reportGreetings,
} from './hello_world';

import { getPayer, getRpcUrl, createKeypairFromFile } from './utils';

async function main() {
  console.log("Let's say vote to a Solana account...");
  let payer = await getPayer();
  
  // let greetedPubkey = await 

  // Establish connection to the cluster
  await establishConnection();


  // Determine who pays for the fees
  await establishPayer(payer);

  // Check if the program has been deployed
  await checkProgram();

  // Say hello to an account
  await sayHello();

  // Find out how many times that account has been greeted
  await reportGreetings();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
