export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    const { status, merchant_ref, is_closed_payment } = req.body;

    if (status === 'PAID') {
      // Simpan status langganan di database kamu
      console.log(`Pembayaran berhasil: ${merchant_ref}`);
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
