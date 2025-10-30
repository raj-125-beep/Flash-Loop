// --- CONFIG ---
const DEMO_RECEIVER = "YourDevnetWalletPublicKeyHere"; // change this to YOUR devnet address
const connection = new solanaWeb3.Connection("https://api.devnet.solana.com", "confirmed");

let wallet = null;

// Elements
const connectBtn = document.getElementById("connectBtn");
const disconnectBtn = document.getElementById("disconnectBtn");
const statusEl = document.getElementById("status");
const sendBtn = document.getElementById("sendBtn");
const escrowSection = document.getElementById("escrowSection");
const txStatus = document.getElementById("txStatus");

// --- CONNECT WALLET ---
connectBtn.onclick = async () => {
  try {
    const resp = await window.solana.connect();
    wallet = resp.publicKey;
    statusEl.textContent = `Connected: ${wallet.toString()}`;
    connectBtn.style.display = "none";
    disconnectBtn.style.display = "inline-block";
    escrowSection.style.display = "block";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Connection failed";
  }
};

// --- DISCONNECT WALLET ---
disconnectBtn.onclick = async () => {
  try {
    await window.solana.disconnect();
  } catch (err) {
    console.warn("Manual disconnect fallback");
  }
  wallet = null;
  statusEl.textContent = "Wallet disconnected";
  connectBtn.style.display = "inline-block";
  disconnectBtn.style.display = "none";
  escrowSection.style.display = "none";
};

// --- SEND 0.001 SOL ESCROW DEMO ---
sendBtn.onclick = async () => {
  if (!wallet) return alert("Connect wallet first!");

  try {
    const tx = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: wallet,
        toPubkey: new solanaWeb3.PublicKey(DEMO_RECEIVER),
        lamports: 0.001 * solanaWeb3.LAMPORTS_PER_SOL,
      })
    );

    tx.feePayer = wallet;
    let blockhashObj = await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhashObj.blockhash;

    const signedTx = await window.solana.signTransaction(tx);
    const signature = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(signature, "confirmed");

    txStatus.innerHTML = `✅ Sent 0.001 SOL!<br>Txn: <a target="_blank" href="https://explorer.solana.com/tx/${signature}?cluster=devnet">${signature}</a>`;
  } catch (err) {
    console.error(err);
    txStatus.textContent = "❌ Transaction failed.";
  }
};
