# SolRouter Private Crypto Research Agent

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-v24.14.1-green.svg)
![SDK](https://img.shields.io/badge/@solrouter/sdk-latest-purple.svg)
![Network](https://img.shields.io/badge/network-Solana%20Devnet-9945FF.svg)
![Encryption](https://img.shields.io/badge/encryption-end--to--end-red.svg)

A private AI agent that researches crypto markets and analyzes DeFi portfolio risk using end-to-end encrypted inference via SolRouter. Every query is encrypted on your device before it leaves — not even SolRouter's backend can read your prompts.

---

## What It Does

This agent demonstrates two powerful use cases for private AI inference on Solana:

**1. Private Crypto Research**
Ask sensitive market questions — DeFi risks, Bitcoin sentiment, gaming coins, market conditions — without exposing your research strategy to any server.

**2. Portfolio Risk Analyzer**
Submit your DeFi positions for encrypted risk analysis. Your holdings are encrypted before leaving your device — nobody sees what you hold.

Every prompt is:
- Encrypted client-side using Arcium's RescueCipher (X25519 key exchange)
- Routed through Solana's decentralized infrastructure
- Processed inside a hardware-isolated Trusted Execution Environment (TEE)
- Returned encrypted — nobody in the middle reads your query

---

## Why Private Inference Matters

When you use a normal AI to research crypto, your prompt travels to the company's server in plain text. For traders and investors, this is a real risk — your research strategy can be logged, leaked, or front-run.

SolRouter solves this with:

- **Blind backend** — the server only ever sees encrypted data
- **TEE processing** — decryption only happens inside isolated hardware
- **On-chain attestations** — privacy guarantees are verifiable on Solana
- **Live web search** — real-time market data, processed privately

---

## Live Demo

### Full Agent Demo — Encrypted Research + Portfolio Risk Analyzer

[![Agent Running Demo](https://img.shields.io/badge/▶%20Watch%20Full%20Demo-Agent%20Running-red?style=for-the-badge&logo=loom)](https://www.loom.com/share/171ee3f469c843f3b4c739d628e125d7)

> Demonstrates 6 encrypted crypto research queries + live portfolio risk analysis — all processed privately through SolRouter's TEE infrastructure

---

## Complete Setup Tutorial

Follow this step-by-step tutorial to go from zero to a running encrypted agent.

---

### Step 1 — Create Your SolRouter Account

[![Create Account](https://img.shields.io/badge/▶%20Watch-Step%201%20Create%20Account-blue?style=for-the-badge&logo=loom)](https://www.loom.com/share/e5b9a65948d4462ab6ecf763ab2be96e)

1. Go to [solrouter.com](https://solrouter.com)
2. Connect your Phantom wallet — no email or KYC required
3. Your account is ready instantly

---

### Step 2 — Fund Your Account With Devnet USDC

[![Get Testnet USDC](https://img.shields.io/badge/▶%20Watch-Step%202%20Get%20Devnet%20USDC-green?style=for-the-badge&logo=loom)](https://www.loom.com/share/1093e5931ef744cc9fe22a908981df2f)

1. Go to [faucet.circle.com](https://faucet.circle.com)
2. Select Solana network and paste your Phantom wallet address
3. Request free devnet USDC
4. Also get devnet SOL for gas fees from [faucet.solana.com](https://faucet.solana.com)
5. Go back to SolRouter and top up your account balance

---

### Step 3 — Generate Your API Key

[![Generate API Key](https://img.shields.io/badge/▶%20Watch-Step%203%20Generate%20API%20Key-orange?style=for-the-badge&logo=loom)](https://www.loom.com/share/23df9229099d4259b5c15e26e3d88b7e)

1. Go to [solrouter.com/api](https://solrouter.com/api)
2. Connect your wallet
3. Click Generate API Key
4. Copy and save your key — it starts with sk_solrouter_

---

### Step 4 — Fund Your SolRouter Account

[![Fund Account](https://img.shields.io/badge/▶%20Watch-Step%204%20Fund%20Account-yellow?style=for-the-badge&logo=loom)](https://www.loom.com/share/402b797095cc4d56861d0cbfdee48f30)

1. Go to your SolRouter dashboard
2. Click Top Up
3. Approve the transaction in Phantom
4. Your balance will appear at the bottom left

---

### Step 5 — Install Node.js

[![Install Node.js](https://img.shields.io/badge/▶%20Watch-Step%205%20Install%20Node.js-lightgrey?style=for-the-badge&logo=loom)](https://www.loom.com/share/eb418922343d4e31893838bb650e401c)

1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version
3. Install it — click Next all the way through
4. Verify by running: