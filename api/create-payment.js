export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { amount, customer_name, customer_email } = req.body;

  try {
    const response = await fetch("https://tripay.co.id/api-sandbox/transaction/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        method: "qris",
        merchant_ref: "INV-123" + Date.now(),
        amount: "10000",
        customer_name: "zaidan",
        customer_email: "zaidanshafi6@gmail.com",
        order_items: 1
          {
            sku: "TEST-001",
            name: "Produk Contoh",
            price: "10000",
            quantity: 1
          }
        ],
        callback_url: "https://zaidantechno.vercel.app/api/webhook"
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

