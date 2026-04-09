# SolRouter Private Crypto Research Agent

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-v24.14.1-green.svg)
![SDK](https://img.shields.io/badge/@solrouter/sdk-latest-purple.svg)
![Network](https://img.shields.io/badge/network-Solana%20Devnet-9945FF.svg)
![Encryption](https://img.shields.io/badge/encryption-end--to--end-red.svg)

A private AI agent that researches crypto markets using end-to-end encrypted inference via SolRouter. Every query is encrypted on your device before it leaves not even SolRouter's backend can read your prompts.

---

## What It Does

This agent lets you research sensitive crypto topics like DeFi risks, Bitcoin sentiment, gaming coins, market conditions without exposing your strategy to any server. Every prompt is:

- Encrypted client side using Arcium's RescueCipher (X25519 key exchange)
- Processed inside a hardware-isolated Trusted Execution Environment (TEE)
- Returned encrypted nobody in the middle reads your query

**Queries the agent runs:**
- What is SolRouter and why does private inference matter?
- What is DeFi and how safe is it for investments in 2026?
- Top 3 risks of DeFi protocols in 2026
- Current Bitcoin price and market sentiment
- Best gaming coins to watch in 2026
- Current crypto market situation in 2026

---

## Why Private Inference Matters

When you use a normal AI to research crypto, your prompt travels to the company's server in plain text. For traders and investors, this is a real risk your research strategy can be logged, leaked, or front-run.

SolRouter solves this with:

- **Blind backend** → the server only ever sees encrypted data
- **TEE processing** → decryption only happens inside isolated hardware
- **On-chain attestations** → privacy guarantees are verifiable on Solana
- **Live web search** → real time market data, processed privately

---

## Live Demo

### Agent Running Encrypted Queries in Action
[![Agent Running Demo](https://img.shields.io/badge/▶%20Watch%20Demo-Agent%20Running-red?style=for-the-badge&logo=loom)](https://www.loom.com/share/7ea0e276818340089456ca661df64255)

> Full demo showing 6 encrypted crypto research queries running live with real-time market data

---

## Setup Walkthrough

### Step 1 — Create Your SolRouter Account

[![Create Account](https://img.shields.io/badge/▶%20Watch-Create%20Account-blue?style=for-the-badge&logo=loom)](https://www.loom.com/share/e5b9a65948d4462ab6ecf763ab2be96e)

1. Go to [solrouter.com](https://solrouter.com)
2. Connect your Phantom wallet — no email or KYC required
3. Go to [solrouter.com/api](https://solrouter.com/api) and generate your API key

---

### Step 2 — Fund Your Account With Devnet USDC

[![Get Testnet USDC](https://img.shields.io/badge/▶%20Watch-Get%20Testnet%20USDC-green?style=for-the-badge&logo=loom)](https://www.loom.com/share/1093e5931ef744cc9fe22a908981df2f)

1. Go to [faucet.circle.com](https://faucet.circle.com)
2. Select Solana network and paste your wallet address
3. Request free devnet USDC
4. Also get devnet SOL from [faucet.solana.com](https://faucet.solana.com) for gas fees
5. Top up your SolRouter account balance

---

### Step 3 — Install Node.js

[![Download Node.js](https://img.shields.io/badge/▶%20Watch-Install%20Node.js-yellow?style=for-the-badge&logo=loom)](https://www.loom.com/share/eb418922343d4e31893838bb650e401c)

1. Go to [nodejs.org](https://nodejs.org)
2. Download and install the LTS version
3. Verify installation by running node -v

---

### Step 4 — Clone and Install

Run these commands:

git clone https://github.com/pipshunter360/solrouter-private-agent.git
cd solrouter-private-agent
npm install

---

### Step 5 — Configure Your API Key

Create a .env file in the project root and add:

SOLROUTER_API_KEY=sk_solrouter_your_key_here

Never commit your .env file. It is already in .gitignore.

---

### Step 6 — Run the Agent

node agent.mjs

---

## Example Output

SolRouter Private Crypto Research Agent
Balance: $20.0000 USDC

[SolRouter Overview]
Query: What is SolRouter and why does private inference matter?
Encrypting prompt client-side...
Response received!
Encrypted: true

[DeFi Risk Analysis]
Query: What are the top 3 risks of DeFi protocols in 2026?
Encrypting prompt client-side...
Response received!
Encrypted: true

[Market Research]
Query: What is the current crypto market situation in 2026?
Encrypting prompt client-side...
Response received!
Encrypted: true

---

## How It Works

Your prompt is encrypted on your device before it leaves.
The SolRouter network routes the encrypted payload through Solana.
Decryption only happens inside a hardware-isolated TEE.
The encrypted response comes back to you and is decrypted locally.
The server never sees your plaintext prompt at any point.

---

## Project Structure

solrouter-private-agent/
├── agent.mjs          # Main agent
├── package.json       # Dependencies
├── .gitignore         # Excludes .env and node_modules
└── README.md          # This file

---

## Tech Stack

- SolRouter SDK (@solrouter/sdk) — Private encrypted AI inference
- Node.js v24.14.1 — Runtime environment
- Solana Devnet — Blockchain infrastructure
- Circle USDC devnet — Payment for inference
- Arcium RescueCipher — X25519 end-to-end encryption

---

## Available Models

- gpt-oss-20b — Open-source GPT 20B (default, cheapest)
- gemini-flash — Google Gemini Flash
- claude-sonnet — Anthropic Claude Sonnet
- gpt-4o-mini — OpenAI GPT-4o Mini

---

## Privacy Guarantee

- Prompts are encrypted on your device before transmission
- SolRouter backend never sees plaintext prompts
- Decryption only happens inside a hardware-isolated TEE
- On-chain privacy attestations available for verification on Solana

---

## Built With

- SolRouter — Private AI inference on Solana
- Arcium — MPC encryption infrastructure
- Solana — Decentralized blockchain network
- Circle — USDC stablecoin payments

---

## License

MIT
