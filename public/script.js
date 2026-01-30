const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Menyimpan konteks percakapan
const conversation = [];

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  conversation.push({ role: 'user', text: userMessage });
  input.value = '';

  try {
    appendMessage('bot', '⏳ Sedang memikirkan jawaban...');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ conversation }),
    });

    const data = await res.json();

    // Hapus pesan loading
    chatBox.lastChild.remove();

    if (data.result) {
      appendMessage('bot', data.result);
      conversation.push({ role: 'model', text: data.result });
    } else {
      appendMessage('bot', 'Terjadi kesalahan dalam memproses jawaban.');
    }
  } catch (err) {
    chatBox.lastChild.remove();
    appendMessage('bot', 'Gagal terhubung ke server.');
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);

  if (sender === 'bot') {
    msg.innerHTML = text
      .replace(/\n\n/g, '<br><br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  } else {
    msg.textContent = text;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
