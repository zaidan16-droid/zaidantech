export default async function handler(req, res) {
   try {
    
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
} if (req.method !== 'POST') return res.status(405).end();

  const { status, INV123, is_closed_payment } = req.body;

  if (status === 'PAID') {
    // Simpan status langganan di database kamu
    console.log(`Pembayaran berhasil: ${INV123}`);
    // contoh: update Firestore/Supabase
  }

  res.status(200).json({ success: true });
}
