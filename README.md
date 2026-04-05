# SolRouter Private Crypto Research Agent

A private AI agent that researches crypto markets using end to end encrypted inference via SolRouter. Your queries never leave your device unencrypted not even SolRouter's backend can read your prompts.

## What It Does

This agent lets you ask sensitive crypto research questions DeFi risks, token analysis, market sentiment without exposing your strategy to any server. Every prompt is encrypted client side before transmission and decrypted only inside a hardware isolated Trusted Execution Environment (TEE).

## Why Private Inference Matters

When you research a trading strategy or analyze a DeFi protocol using a normal AI, your prompt is visible to the AI company's servers. For crypto traders and investors, this is a real risk your research strategy could be logged, leaked, or front run.

SolRouter solves this with:
- Client-side encryption using Arcium's RescueCipher (X25519 key exchange)
- Blind backend: the server only sees encrypted data
- TEE processing: decryption only happens inside isolated hardware
- On-chain privacy attestations on Solana for verification

## Features

- 3 encrypted research queries running in sequence
- Live web search enabled for real-time market data
- Balance checking before each session
- Works on Solana devnet with Circle USDC

## Setup

1. Clone this repo
```
git clone https://github.com/pipshunter360/solrouter-private-agent.git
cd solrouter-private-agent
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file
```
SOLROUTER_API_KEY=sk_solrouter_your_key_here
```

4. Get your API key at solrouter.com/api

5. Run the agent
```
node agent.mjs
```

## Example Output
```
SolRouter Private Crypto Research Agent
Balance: $20.0000 USDC

[DeFi Risk Analysis]
Query: What are the top 3 risks of DeFi protocols in 2025?
Encrypting prompt client-side...
Response received!
Encrypted: true

Answer:
1. Smart Contract Vulnerabilities
2. Regulatory Uncertainty
3. Platform and Counterparty Risk
```

## Built With

- SolRouter SDK (@solrouter/sdk)
- Node.js
- Solana Devnet
- Circle USDC (devnet)

## License

MIT
