import { SolRouter } from '@solrouter/sdk';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new SolRouter({
  apiKey: process.env.SOLROUTER_API_KEY
});

async function encryptedQuery(query, label) {
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

async function portfolioRiskAnalyzer(positions) {
  console.log('\n============================================================');
  console.log('PORTFOLIO RISK ANALYZER — Private & Encrypted');
  console.log('============================================================');
  console.log('Analyzing your DeFi positions privately...');
  console.log('Your holdings are encrypted before leaving your device.\n');

  for (const position of positions) {
    await encryptedQuery(
      `Analyze the risk of holding ${position.amount} ${position.token} in ${position.protocol}. 
       Current value: $${position.value}. 
       Flag any smart contract risks, liquidity risks, or market risks I should know about in 2026.`,
      `Risk Analysis — ${position.token} on ${position.protocol}`
    );
  }
}

async function main() {
  const balance = await client.getBalance();
  console.log('\n============================================================');
  console.log('SolRouter Private Crypto Research Agent');
  console.log('============================================================');
  console.log('Balance: ' + balance.balanceFormatted);
  console.log('Encryption: Enabled (Arcium RescueCipher X25519)');
  console.log('Live Search: Enabled');
  console.log('Network: Solana Devnet');
  console.log('============================================================\n');

  await encryptedQuery(
    'What is SolRouter? It is a privacy-first AI inference platform built on Solana that uses end-to-end encryption and Trusted Execution Environments (TEE) to keep AI prompts private. Explain why this matters for crypto traders and developers.',
    'SolRouter Overview'
  );

  await encryptedQuery(
    'What is DeFi and how safe is it for investments in 2026?',
    'DeFi Research'
  );

  await encryptedQuery(
    'What are the top 3 risks of DeFi protocols in 2026?',
    'DeFi Risk Analysis'
  );

  await encryptedQuery(
    'What is the current price and market sentiment for Bitcoin?',
    'Bitcoin Research'
  );

  await encryptedQuery(
    'What are the best gaming coins to watch in 2026?',
    'Gaming Coins Research'
  );

  await encryptedQuery(
    'What is the current crypto market situation in 2026?',
    'Market Research'
  );

  const myPortfolio = [
    { token: 'SOL', protocol: 'Marinade Finance', amount: '10', value: '1500' },
    { token: 'USDC', protocol: 'Raydium', amount: '500', value: '500' },
    { token: 'JUP', protocol: 'Jupiter', amount: '200', value: '300' },
  ];

  await portfolioRiskAnalyzer(myPortfolio);
}

main();