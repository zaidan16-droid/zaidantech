export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Hanya POST yang diizinkan' });
    }

    const body = req.body;

    console.log('Tripay Callback:', body);

    const status = body.status;
    const merchant_ref = body.merchant_ref;

    if (status === 'PAID') {
      console.log(`✅ Pembayaran berhasil untuk: ${merchant_ref}`);
      // Kalau perlu, simpan ke database di sini
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('❌ ERROR:', err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

