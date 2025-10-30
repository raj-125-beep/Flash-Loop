import { Telegraf } from 'telegraf';
import express from 'express';
import cors from 'cors';

const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const DASHBOARD_URL = 'http://localhost:5500'; // your web dashboard
const bot = new Telegraf(BOT_TOKEN);

const app = express();
app.use(cors());
app.use(express.json());

let automations = []; // Temporary store (you can replace with DB)

// --- TELEGRAM BOT LOGIC ---
bot.start((ctx) => {
  ctx.reply(`Hey ${ctx.from.first_name}! 👋\nSend me a product name or link to start automating.`);
});

bot.on('text', async (ctx) => {
  const product = ctx.message.text;
  const user = ctx.from.username || ctx.from.first_name;

  // Save product automation
  automations.push({ user, product, status: 'Active', escrow: '1.2 SOL' });

  ctx.reply(
    `✅ Product "${product}" added for automation!\n\nView it on dashboard: ${DASHBOARD_URL}`
  );
});

// --- API ENDPOINTS ---
// Get all automations
app.get('/automations', (req, res) => {
  res.json(automations);
});

// Clear (optional for testing)
app.post('/clear', (req, res) => {
  automations = [];
  res.json({ message: 'Cleared all automations' });
});

// Start bot + server
bot.launch();
app.listen(4000, () => console.log('🚀 Backend running on port 4000, bot active'));
