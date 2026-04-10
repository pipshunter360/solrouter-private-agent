import { SolRouter } from '@solrouter/sdk';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new SolRouter({
  apiKey: process.env.SOLROUTER_API_KEY
});

// Fetch live token prices from coingecko API
async function getLiveTokenData(tokenSymbol) {
  const coinIds = {
    'SOL': 'solana',
    'JUP': 'jupiter-exchange-solana',
    'BONK': 'bonk',
    'WIF': 'dogwifcoin',
    'PYTH': 'pyth-network',
  };

  const coinId = coinIds[tokenSymbol];
  if (!coinId) return null;

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
    const data = await response.json();
    const price = data[coinId]?.usd;
    if (price) {
      console.log(`✅ ${tokenSymbol}: $${price} (live from CoinGecko)`);
      return price.toString();
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch ${tokenSymbol} price:`, error.message);
    return null;
  }
}

// Private encrypted trading analysis
async function privateTradingAnalysis(token, price, amount) {
  console.log(`\n🔐 [Private Trading Analysis — ${token}]`);
  console.log(`💰 Current Price: $${price}`);
  console.log(`📊 Position Size: ${amount} ${token}`);
  console.log(`🔒 Encrypting trading strategy query...`);

  try {
    const response = await client.chat(
      `I am analyzing a trade for ${token} currently priced at $${price}.
       I want to trade ${amount} ${token} worth $${(price * amount).toFixed(2)}.
       Give me a private trading analysis covering:
       1. Current price momentum and trend
       2. Key risk factors for this trade right now
       3. Suggested entry/exit strategy
       4. Overall trade recommendation (Strong Buy/Buy/Hold/Sell/Strong Sell)
       Be specific and data-driven.`,
      {
        model: 'gpt-oss-20b',
        encrypted: true,
        useLiveSearch: true,
      }
    );

    console.log(`✅ Analysis received! Encrypted: ${response.encrypted}`);
    console.log(`\n📈 Trading Intelligence:\n${response.message}`);
    console.log('─'.repeat(70));
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Portfolio risk analyzer
async function portfolioRiskAnalyzer(positions) {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║         PORTFOLIO RISK ANALYZER — Private & Encrypted      ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('🔒 Your holdings are encrypted before leaving your device.\n');

  for (const position of positions) {
    try {
      const response = await client.chat(
        `Analyze the risk of holding ${position.amount} ${position.token} 
         in ${position.protocol} currently worth $${position.value}.
         Cover smart contract risks, liquidity risks, and market risks in 2026.`,
        {
          model: 'gpt-oss-20b',
          encrypted: true,
          useLiveSearch: true,
        }
      );

      console.log(`\n🔐 [Risk Analysis — ${position.token} on ${position.protocol}]`);
      console.log(`✅ Encrypted: ${response.encrypted}`);
      console.log(`\n⚠️ Risk Report:\n${response.message}`);
      console.log('─'.repeat(70));
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  }
}

async function main() {
  const balance = await client.getBalance();

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║       SolRouter Private Trading Agent — Live on Solana     ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`💰 Account Balance: ${balance.balanceFormatted}`);
  console.log('🔒 Encryption: Enabled (Arcium RescueCipher X25519)');
  console.log('🌐 Live Market Data: Enabled via Jupiter API');
  console.log('⛓️  Network: Solana Devnet');
  console.log('═'.repeat(62));

  console.log('\n📡 Fetching live token prices from Jupiter...\n');

  const tokens = ['SOL', 'JUP', 'BONK', 'WIF', 'PYTH'];
  const prices = {};

  for (const token of tokens) {
    const price = await getLiveTokenData(token);
    if (price) {
      prices[token] = price;
      console.log(`✅ ${token}: $${price}`);
    }
  }

  console.log('\n═'.repeat(62));
  console.log('🤖 Running Private Encrypted Trading Analysis...');
  console.log('Your strategy never hits a public server.');
  console.log('═'.repeat(62));

  if (prices['SOL']) {
    await privateTradingAnalysis('SOL', prices['SOL'], 10);
  }

  if (prices['JUP']) {
    await privateTradingAnalysis('JUP', prices['JUP'], 500);
  }

  if (prices['WIF']) {
    await privateTradingAnalysis('WIF', prices['WIF'], 1000);
  }

  const myPortfolio = [
    { token: 'SOL', protocol: 'Marinade Finance', amount: '10', value: prices['SOL'] ? (prices['SOL'] * 10).toFixed(2) : '1500' },
    { token: 'USDC', protocol: 'Raydium', amount: '500', value: '500' },
    { token: 'JUP', protocol: 'Jupiter', amount: '200', value: prices['JUP'] ? (prices['JUP'] * 200).toFixed(2) : '300' },
  ];

  await portfolioRiskAnalyzer(myPortfolio);
}

main();