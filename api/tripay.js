import crypto from "crypto";
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, amount } = req.body;

    // Validasi input minimal
    if (!name || !email || !amount) {
      return res.status(400).json({ error: "Parameter name, email, amount wajib diisi" });
    }

    const merchantCode = "T43073"; // Ganti dengan kode asli
    const apiKey = "DEV-LL680trseR5ykapP8MHOdUyTawnQlSidnIETKCm7"; // Ganti API key asli
    const privateKey = "b6nHA-E3B9J-LGL8v-t0MUr-OKQf6"; // Ganti private key asli

    const merchantRef = "INV123" + Date.now();
    const nominal = Number(10000);

    if (isNaN(nominal) || nominal <= 0) {
      return res.status(400).json({ error: "Amount harus berupa angka positif" });
    }

    // Buat payload transaksi
    const payload = {
      method: "QRIS",
      merchant_ref: merchantRef,
      amount: nominal,
      customer_name: name,
      customer_email: email,
      order_items: [
        {
          sku: "langganan-basic",
          name: "Langganan Premium",
          price: nominal,
          quantity: 1,
        },
      ],
      callback_url: "https://zaidantechno.vercel.app/api/callback",
      return_url: "https://zaidantechno.vercel.app/success",
    };

    // Buat signature
    const signature = crypto
      .createHmac("sha256", privateKey)
      .update(merchantCode + merchantRef + nominal)
      .digest("hex");

    // Payload lengkap termasuk signature
    const bodyToSend = { ...payload, signature };

    console.log("Kirim payload ke Tripay:", bodyToSend);

    // Panggil API Tripay
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

    console.log("Response Tripay:", response.status, data);

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Terjadi kesalahan dari API Tripay",
        raw_response: data,
      });
    }

    // Kirim data sukses ke frontend
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error di handler create-transaction:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

