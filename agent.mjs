import { SolRouter } from '@solrouter/sdk';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new SolRouter({
  apiKey: process.env.SOLROUTER_API_KEY
});

async function cryptoResearchAgent(query, label) {
  console.log(`\n[${label}]`);
  console.log(`Query: ${query}`);
  console.log('Encrypting prompt client-side...');

  try {
    const response = await client.chat(query, {
      model: 'gpt-oss-20b',
      encrypted: true,
      useLiveSearch: true,
    });

    console.log('Response received!');
    console.log('Encrypted: ' + response.encrypted);
    console.log('\nAnswer:\n' + response.message);
    console.log('------------------------------------------------------------');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function main() {
  const balance = await client.getBalance();
  console.log('SolRouter Private Crypto Research Agent');
  console.log('Balance: ' + balance.balanceFormatted);

  await cryptoResearchAgent('What are the top 3 risks of DeFi protocols in 2025?', 'DeFi Risk Analysis');
  await cryptoResearchAgent('What is the current price and market sentiment for Bitcoin?', 'Bitcoin Research');
  await cryptoResearchAgent('What are the best privacy coins to watch in 2025?', 'Privacy Coin Research');
}

main();