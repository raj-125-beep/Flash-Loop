⚡ Flash-Loop — Solana-Powered Auto Transaction System

Flash-Loop is a minimal decentralized web application built on Solana that enables seamless wallet connection using Phantom Wallet and executes instant peer-to-peer transactions on the Solana Devnet.
The project demonstrates Solana integration, wallet authentication, and basic on-chain transaction handling — perfect for hackathon-ready submissions.

🚀 Features

🔗 Phantom Wallet Integration — Securely connect and disconnect your Solana wallet.

💸 Instant SOL Transfers — Send SOL between wallets directly from your browser.

🧩 Simple UI — Clean and minimal one-page dashboard.

🌐 Runs Locally or on Vercel — Works seamlessly with both localhost and hosted environments.

🧠 Hackathon-Ready Base — Bare-minimum Solana integration to expand into escrow, marketplaces, or automation.

🛠️ Tech Stack
Layer	Technology
Frontend	HTML, JavaScript, TailwindCSS
Blockchain	Solana (Devnet)
Wallet	Phantom Wallet
Library	@solana/web3.js
⚙️ Setup & Run Locally
1️⃣ Clone the Repository
git clone https://github.com/raj-125-beep/Flash-Loop
cd flashflow

2️⃣ Install Dependencies (optional for pure HTML)

If using Node:

npm install

3️⃣ Start Local Server

Use any of these:

python -m http.server 5500
or
npx serve
Then open:
👉 http://localhost:5500

🧩 How It Works

Connect Phantom Wallet
Click on Connect Phantom
Approve the connection popup
Send SOL
Click on Send 0.01 SOL
Confirm transaction in Phantom
On success, you’ll see a success alert with the transaction ID
Disconnect Wallet
Click Disconnect to unlink your wallet

🪙 Example Transaction Flow
Step	Description
1️⃣	User connects Phantom wallet
2️⃣	Enters or uses a preset recipient address
3️⃣	Transaction is signed locally via Phantom
4️⃣	SOL is transferred through Solana’s devnet
5️⃣	Success or error message appears
⚡ Escrow Extension (Next Phase)

This version includes direct transfers only.
You can extend it to:

Implement an escrow system (funds held until both parties confirm)

Build an automated trading bot using Solana webhooks

Add Telegram bot integration for automated notifications or actions

📜 File Structure
flashflow/
│
├── index.html         # Main UI + Wallet Connection + Transaction Logic
├── script.js          # Solana integration (optional separation)
├── style.css          # Minimal styling (if any)
└── README.md          # Project documentation

🧑‍💻 Developer Notes

Network: Devnet (for testing)
Default Transfer Amount: 0.01 SOL
Ensure: Wallet has devnet SOL (use Solana Faucet)
Switch Network: In Phantom → Developer Settings → Select Devnet

🏁 Future Enhancements
Add backend webhook (Node.js or Python) for transaction logs
Build escrow contract (program) using Solana Anchor
Integrate Telegram bot for automation
Deploy on Vercel or Netlify for production use
