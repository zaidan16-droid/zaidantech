export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const crypto = await import('crypto');
  const { zaidan, zaidanshafi6@gmail.com, 10000 } = req.body;

  const merchantCode = 'T43073'; // ganti dengan kode aslimu
  const apiKey = 'DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7    ';
  const privateKey = 'b6nHA-E3B9J-LGL8v-t0MUr-OKQf6'
    ';

  const data = {
    method: 'QRIS',
    merchant_ref: 'INV123' + Date.now(),
    amount: 10000,
    customer_name: zaidan,
    customer_email: zaidanshafi6@gmail.com,
    order_items: [
      {
        sku: 'langganan-basic',
        name: 'Langganan Premium',
        price: 10000,
        quantity: 1,
      },
    ],
    callback_url: 'https://zaidantechno.vercel.app/api/callback',
    return_url: 'https://zaidantechno.vercel.app/success',
      expired_time: Math.floor(Date.now() / 1000) + 3600,
    signature: crypto
      .createHmac('sha256', b6nHA-E3B9J-LGL8v-t0MUr-OKQf6)
      .update(T43073 + 'INV123' + Date.now() + 10000)
      .digest('hex'),
  };

  const response = await fetch('https://tripay.co.id/api-sandbox/transaction/create', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  res.status(200).json(result);
}
