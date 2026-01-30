# 💰 Chatbot Edukasi Finansial  
*(gemini-chatbot-api-Chatbot_Edukasi_Finansial)*

Chatbot Edukasi Finansial adalah aplikasi web sederhana berbasis AI yang dibuat untuk membantu pengguna memahami **konsep-konsep keuangan secara umum** seperti inflasi, suku bunga, dan kondisi ekonomi, dengan bahasa yang netral dan mudah dipahami.

Aplikasi ini **tidak memberikan saran atau rekomendasi investasi personal**, melainkan berfokus pada edukasi dan kerangka berpikir finansial.

---

## 🎯 Tujuan Aplikasi
- Memberikan edukasi dasar mengenai topik finansial
- Membantu pengguna memahami isu ekonomi secara konseptual
- Menjadi contoh implementasi integrasi AI (Google Gemini) dengan aplikasi web sederhana

---

## ✨ Fitur Utama
- Chatbot edukasi finansial berbasis **Google Gemini API**
- Antarmuka web sederhana, berwarna, dan mudah digunakan
- Menjaga konteks percakapan tanpa menggunakan database
- Jawaban difokuskan pada penjelasan konsep, bukan pengambilan keputusan

---

## 🛠️ Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **Google Gemini API**
- **HTML, CSS, JavaScript (Vanilla)**

---

## 📂 Struktur Folder
```text
gemini-chatbot-api-Chatbot_Edukasi_Finansial/
├─ index.js              # Entry point server (Express & Gemini API)
├─ public/               # File frontend (UI chatbot)
│  ├─ index.html         # Tampilan utama aplikasi
│  ├─ script.js          # Logika interaksi chatbot
│  └─ style.css          # Styling antarmuka
├─ screenshots/          # Dokumentasi visual aplikasi
│  └─ image.png
├─ package.json          # Konfigurasi project & dependensi
└─ .env                  # Environment variable (tidak dipublikasikan)
```

> Catatan: File `node_modules`, `.env`, dan `package-lock.json` tidak disertakan dalam repository untuk menjaga keamanan dan kesederhanaan konfigurasi project.

---

## ▶️ Cara Menjalankan Aplikasi
1. Clone repository ini:
   ```bash
   git clone <url-repository>
2. Masuk ke folder project:
   ```bash
   cd gemini-chatbot-api-Chatbot_Edukasi_Finansial
3. Instalasi dependensi:
   ```bash
   npm install
4. Buat file .env dan isi dengan API key Gemini:  
   ```bash
   GEMINI_API_KEY=API_KEY_ANDA
5. Jalankan server:  
   ```bash
   node index.js
6. Buka browser dan akses:  
   http://localhost:3000

---

## 🖼️ Screenshot Aplikasi

Berikut adalah tampilan antarmuka Chatbot Edukasi Finansial saat digunakan melalui browser.
![Tampilan Chatbot Edukasi Finansial](screenshots/image.png)
Screenshot menampilkan:
- Antarmuka chatbot berbasis web
- Contoh pertanyaan pengguna terkait konsep finansial
- Jawaban chatbot yang bersifat edukatif dan tidak memberikan saran investasi personal

---

## ⚠️ Catatan Penting

- Aplikasi ini bersifat edukatif
- Tidak dimaksudkan sebagai nasihat finansial profesional
- API key disimpan menggunakan file `.env` dan tidak disertakan dalam repositori
- Aplikasi dijalankan secara lokal (localhost)
