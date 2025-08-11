import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Hitung signature untuk verifikasi
  const hmac = crypto.createHmac('sha256', process.env.TRIPAY_PRIVATE_KEY);
  hmac.update(JSON.stringify(req.body));
  const signature = hmac.digest('hex');

  if (signature !== req.headers['x-callback-signature']) {
    return res.status(403).json({ error: 'Invalid signature' });
  }

  // Simpan status pembayaran ke database eksternal (misalnya Firebase)
  console.log("Webhook diterima:", req.body);

  res.status(200).json({ success: true });
}

