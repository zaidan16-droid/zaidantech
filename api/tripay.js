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
     const bodyToSend = { ...payload, signature };

    const response = await fetch(
      "https://tripay.co.id/api-sandbox/transaction/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyToSend),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "API Tripay error" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in create-transaction handler:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
