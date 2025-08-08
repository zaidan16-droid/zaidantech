export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
  const crypto = await import('crypto');
  const fetch = (await import("node-fetch")).default;


  const merchantCode = 'T43073'; // ganti dengan kode aslimu
  const apiKey = 'DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7';
  const privateKey = 'b6nHA-E3B9J-LGL8v-t0MUr-OKQf6';
    
const { name, email, amount } = req.body;
    
  const payload = {
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
  };
   app.post("/create-transaction", async (req, res) => {
  try {
    const response = await fetch("https://tripay.co.id/api-sandbox/transaction/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.b6nHA-E3B9J-LGL8v-t0MUr-OKQf6}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json(); // parsing dari Tripay
    res.json(data); // kirim balik ke frontend dalam bentuk JSON valid
  } catch (err) {
    res.status(500).json({ error: err.message }); // kalau error, tetap JSON
  }
});

