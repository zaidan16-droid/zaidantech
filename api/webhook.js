export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  // Verifikasi signature Tripay
  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', process.env.DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7);
  hmac.update(JSON.stringify(req.body));
  const signature = hmac.digest('hex');

  if (signature !== req.headers['x-callback-signature']) {
    return res.status(403).json({ error: 'Invalid signature' });
  }

  // Simpan status pembayaran ke database eksternal
  console.log("Webhook diterima:", req.body);

  res.status(200).json({ success: true });
}
