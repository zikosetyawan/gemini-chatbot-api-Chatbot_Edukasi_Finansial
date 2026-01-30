import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_MODEL = 'gemini-2.5-flash';

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));

app.post('/api/chat', async (req, res) => {
  try {
    const { conversation } = req.body;

    if (!Array.isArray(conversation)) {
      return res.status(400).json({
        error: 'conversation harus berupa array',
      });
    }

    const contents = conversation.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        temperature: 0.6,
        systemInstruction: `
Anda adalah chatbot edukasi finansial (bukan penasihat finansial profesional).

Aturan utama:
- Jelaskan konsep keuangan secara netral dan sederhana
- Gunakan contoh ilustratif atau hipotetis
- Jangan memberikan rekomendasi investasi spesifik
- Jangan menyebutkan produk, saham, kripto, atau aset tertentu
- Jika pengguna meminta saran langsung, berikan kerangka berpikir, bukan keputusan
- Dorong pengguna untuk mempertimbangkan tujuan, risiko, dan jangka waktu sendiri

Gunakan bahasa Indonesia yang ramah, tenang, dan tidak menggurui.
`,
      },
    });

    res.status(200).json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Terjadi kesalahan pada server',
    });
  }
});