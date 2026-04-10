# SolRouter Private Crypto Research Agent

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-v24.14.1-green.svg)
![SDK](https://img.shields.io/badge/@solrouter/sdk-latest-purple.svg)
![Network](https://img.shields.io/badge/network-Solana%20Devnet-9945FF.svg)
![Encryption](https://img.shields.io/badge/encryption-end--to--end-red.svg)

A private AI agent that researches crypto markets and analyzes DeFi portfolio risk using end to end encrypted inference via SolRouter. Every query is encrypted on your device before it leaves, not even SolRouter's backend can read your prompts.

---

## The Problem

Every time you use a normal AI tool to research crypto, your prompt is sent in plain text to a company's server. 

  That means:
- The AI company can read every question you ask
- Your trading strategy, portfolio concerns, and research angles are logged
- That data could be stored, analyzed, or exposed in a breach
- In crypto markets, your research IS your edge and it's being given away for free

This is not a theoretical risk. It is how every mainstream AI tool works today.

If you're casually asking AI what Bitcoin is, sure, it doesn't matter. But the moment you start asking about a specific protocol you're considering, a token you're researching, or a strategy you're building, that's when it gets serious. That information reveals your next move. And right now it's sitting on someone else's server.

---

## The Solution: Private Inference

SolRouter is a privacy first AI inference platform built on Solana. It solves this problem with a completely different architecture:

Your prompt never travels in plain text. Instead it is encrypted on your device before it leaves, using Arcium's RescueCipher with X25519 key exchange. The encrypted data is then routed through Solana's decentralized infrastructure to a Trusted Execution Environment a piece of isolated hardware where even the server owner cannot see what is being processed inside.

The AI runs inside that sealed environment. The response comes back encrypted. You decrypt it on your device. At no point in that entire process does any server see your actual question.

This is called end to end encrypted inference and SolRouter is one of the only platforms offering it on a live production network.

The privacy guarantee has four layers:

Client side encryption: your prompt is encrypted before it leaves your device using X25519 key exchange. Nobody intercepts plaintext.

Blind backend: SolRouter's servers route the encrypted payload but cannot read it. The backend is architecturally blind to your content.

TEE processing: decryption and inference happen inside a Trusted Execution Environment. This is specialized hardware that creates a sealed isolated environment. Even if someone had full access to the physical server they could not read what is being processed inside the TEE.

Onchain attestations: the privacy guarantees are not just claims. They are verifiable on the Solana blockchain. Anyone can check that the system is operating as described.

---

## What This Agent Does

This project covers two real use cases for private AI inference.

### Use Case 1: Private Crypto Research

The agent runs six encrypted research queries covering topics that crypto traders and investors actually care about.

* What is SolRouter and why does private inference matter for crypto. Understanding the technology before using it.

* What is DeFi and how safe is it for investments in 2026. A foundational question that reveals your investment thinking if sent unencrypted.

* Top 3 risks of DeFi protocols in 2026. The kind of pre-investment research you do not want logged on someone else's server.

* Current Bitcoin price and market sentiment. Live market data pulled through encrypted inference using SolRouter's live web search.

* Best gaming coins to watch in 2026. Sector research that reveals your investment direction.

* Current crypto market situation in 2026. Macro market analysis using real-time data.

Every query is encrypted before it leaves your device. Every response confirms Encrypted: true.

### Use Case 2: Portfolio Risk Analyzer

The agent takes a list of DeFi positions and runs encrypted risk analysis on each one.

The demo portfolio has three positions. SOL staked on Marinade Finance, USDC on Raydium, and JUP on Jupiter. For each position the agent asks for risk analysis covering smart contract risks, liquidity risks, and market risks specific to that token and protocol.

In a real scenario a user would input their actual holdings. The important thing is that those holdings never leave their device unencrypted. Nobody sees what you own, how much, or where it is deployed. Not SolRouter, not the AI provider, nobody.

For serious DeFi users this is the use case that matters most. Your portfolio is sensitive financial information and it should stay that way.

---

## Live Demo

### Full Agent Demo: Encrypted Research and Portfolio Risk Analyzer

[![Agent Running Demo](https://img.shields.io/badge/▶%20Watch%20Full%20Demo-Agent%20Running-red?style=for-the-badge&logo=loom)](https://www.loom.com/share/171ee3f469c843f3b4c739d628e125d7)

This demo shows the complete agent running all six research queries plus the portfolio risk analyzer with encryption confirmed on every single response.

---

## Complete Setup Tutorial

This tutorial takes you from zero to a running encrypted agent. Follow each step in order.

---

### Step 1: Create Your SolRouter Account

[![Create Account](https://img.shields.io/badge/▶%20Watch-Step%201%20Create%20Account-blue?style=for-the-badge&logo=loom)](https://www.loom.com/share/e5b9a65948d4462ab6ecf763ab2be96e)

Go to solrouter.com and connect your Phantom wallet. No email required, no KYC, no forms. The account is created instantly when you connect your wallet. This is how Web3 onboarding should work.

Once you are in, go to solrouter.com/api to access the API dashboard where you will generate your key in a later step.

---

### Step 2: Get Free Devnet USDC

[![Get Testnet USDC](https://img.shields.io/badge/▶%20Watch-Step%202%20Get%20Devnet%20USDC-green?style=for-the-badge&logo=loom)](https://www.loom.com/share/1093e5931ef744cc9fe22a908981df2f)

SolRouter uses USDC on Solana for payments. For testing on devnet you can get free USDC from the Circle faucet.

Go to faucet.circle.com, select Solana as the network, paste your Phantom wallet address, and request USDC. It arrives within seconds.

You will also need a small amount of devnet SOL to pay Solana network fees. Every transaction on Solana requires SOL for gas even when you are spending USDC. Get free devnet SOL from faucet.solana.com. One SOL is more than enough for extensive testing.

---

### Step 3: Generate Your API Key

[![Generate API Key](https://img.shields.io/badge/▶%20Watch-Step%203%20Generate%20API%20Key-orange?style=for-the-badge&logo=loom)](https://www.loom.com/share/23df9229099d4259b5c15e26e3d88b7e)

Go to solrouter.com/api, connect your wallet, and generate an API key. Your key will start with sk_solrouter_ and should be treated like a password.

Store it in a .env file in your project and never commit it to GitHub. The .gitignore in this repo already excludes .env files automatically.

---

### Step 4: Fund Your SolRouter Account

[![Fund Account](https://img.shields.io/badge/▶%20Watch-Step%204%20Fund%20Account-yellow?style=for-the-badge&logo=loom)](https://www.loom.com/share/402b797095cc4d56861d0cbfdee48f30)

Go to your SolRouter dashboard and click Top Up. Phantom will open and ask you to approve the transaction. Approve it and your USDC balance will appear at the bottom left of the dashboard.

You need balance in your SolRouter account to make API calls. Each query costs a small amount depending on which model you use. For testing with gpt-oss-20b the cost per query is very low.

---

### Step 5: Install Node.js

[![Install Node.js](https://img.shields.io/badge/▶%20Watch-Step%205%20Install%20Node.js-lightgrey?style=for-the-badge&logo=loom)](https://www.loom.com/share/eb418922343d4e31893838bb650e401c)

Go to nodejs.org and download the LTS version. Run the installer and click Next all the way through without changing any settings.

When installation is complete open your terminal and verify it worked by running node -v. You should see a version number like v24.14.1.

Node.js is the JavaScript runtime that powers this agent. It allows you to run JavaScript code outside of a browser, which is what makes server-side scripting and CLI tools like this possible.

---

### Step 6: Initialize Project and Install SDK

[![Install SDK](https://img.shields.io/badge/▶%20Watch-Step%206%20Install%20SDK-purple?style=for-the-badge&logo=loom)](https://www.loom.com/share/3df426afe8c744eb938cd1b7d2ece1a4)

Create a new folder for your project, open your terminal inside it, and run these commands:

npm init -y
npm install @solrouter/sdk@latest
npm install dotenv

npm init -y creates a package.json file that tracks your project dependencies. npm install @solrouter/sdk@latest installs the SolRouter SDK which handles all the encryption and API communication automatically. npm install dotenv allows you to load your API key from the .env file securely.

---

### Step 7: Configure Your API Key

Create a file called .env in your project root and add this line:

SOLROUTER_API_KEY=sk_solrouter_your_key_here

Replace sk_solrouter_your_key_here with the actual key you generated in Step 3. The dotenv package will load this automatically when the agent runs.

Never share this key publicly and never commit it to GitHub. If your key is exposed you should immediately go to solrouter.com/api and regenerate it.

---

### Step 8: Clone and Run

git clone https://github.com/pipshunter360/solrouter-private-agent.git
cd solrouter-private-agent
npm install
node agent.mjs

The agent will check your balance, run all six research queries, then run the portfolio risk analyzer. Every response will confirm Encrypted: true.

---

## Example Output

SolRouter Private Crypto Research Agent
Balance: $20.0000 USDC
Encryption: Enabled (Arcium RescueCipher X25519)
Live Search: Enabled
Network: Solana Devnet

[SolRouter Overview]
Query: What is SolRouter and why does private inference matter?
Encrypting prompt client side...
Response received!
Encrypted: true

Answer:
SolRouter is a privacy first AI inference platform built on Solana...

[DeFi Risk Analysis]
Query: What are the top 3 risks of DeFi protocols in 2026?
Encrypting prompt client-side...
Response received!
Encrypted: true

Answer:
1. Smart Contract Vulnerabilities
2. Regulatory Uncertainty
3. Platform and Counterparty Risk

Portfolio Risk Analyzer Private and Encrypted
Analyzing your DeFi positions privately...
Your holdings are encrypted before leaving your device.

[Risk Analysis SOL on Marinade Finance]
Query: Analyze the risk of holding 10 SOL in Marinade Finance...
Encrypting prompt client side...
Response received!
Encrypted: true

---

## How Private Inference Works

Normal AI request flow:
Your question travels in plain text to a company server. The server reads it, processes it, logs it, and sends back an answer. Your question is now in their database.

SolRouter private inference flow:
Your question is encrypted on your device before it leaves. The encrypted data travels through Solana infrastructure to a TEE. Inside the TEE the data is decrypted, the AI processes it, and the response is encrypted before leaving the TEE. The encrypted response travels back to your device where you decrypt it. At no point did any server read your question.

The difference is not just privacy. It is about who controls your research. With normal AI your queries are someone else's data. With SolRouter they stay yours.

---

## Why This Matters for Crypto Specifically

Crypto research is sensitive in ways that most other research is not.

When you research a trading strategy you are revealing your intentions. When you analyze a DeFi protocol before investing you are showing your next move. When you ask an AI agent to execute trades based on encrypted instructions you are protecting your strategy from being front-run.

Three groups benefit most from private inference:

Active traders who do pre-trade research. Your research is your alpha. Keeping it private keeps your edge.

DeFi investors analyzing protocols. Smart contract risk analysis, liquidity depth questions, protocol security research all of this reveals what you are considering putting money into.

AI agent developers. Agents that manage DeFi positions or execute trades based on AI analysis should never send plaintext instructions to any server. Encrypted inference closes that attack surface completely.

---

## Project Structure

solrouter-private-agent/
├── agent.mjs           # Main agent. Runs encrypted crypto research queries and portfolio risk analysis.
├── package.json        # Project dependencies and scripts.
├── package-lock.json   # Locks dependency versions for consistent installs.
├── .gitignore          # Keeps .env and node_modules out of the repo.
└── README.md           # Full documentation and setup tutorial.

---

## Available Models

| Model | Provider | Best For |
|---|---|---|
| gpt-oss-20b | Open-source GPT 20B | Default model, cheapest, good for general research |
| gemini-flash | Google Gemini Flash | Fast responses, high volume queries |
| claude-sonnet | Anthropic Claude Sonnet | Strong reasoning, complex analysis |
| gpt-4o-mini | OpenAI GPT-4o Mini | Balanced performance and cost |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| SolRouter SDK (@solrouter/sdk) | Handles all encryption and API communication automatically |
| Node.js v24.14.1 | JavaScript runtime for running the agent outside a browser |
| Solana Devnet | Blockchain infrastructure for routing and payments |
| Circle USDC | Stablecoin used for paying inference costs on devnet |
| Arcium RescueCipher X25519 | Encryption protocol that keeps prompts private |
| dotenv | Loads API keys from .env files securely without hardcoding them |

---

## Built With

[![SolRouter](https://img.shields.io/badge/SolRouter-Privacy%20AI-black?style=for-the-badge)](https://solrouter.com)
[![Arcium](https://img.shields.io/badge/Arcium-MPC%20Encryption-blue?style=for-the-badge)](https://arcium.com)
[![Solana](https://img.shields.io/badge/Solana-Blockchain-9945FF?style=for-the-badge)](https://solana.com)
[![Circle](https://img.shields.io/badge/Circle-USDC-00D395?style=for-the-badge)](https://circle.com)

---

## License

MIT
