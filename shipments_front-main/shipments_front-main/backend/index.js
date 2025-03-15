require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Подключение к Ethereum (Ganache)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); // RPC Ganache
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// ABI и адрес смарт-контракта
const contractABI = require("./SupplyChainABI.json");
const contractAddress = "0x2E5a1148B04c03204cDC596a0622a16a94A29757"; // Адрес контракта

const supplyChain = new ethers.Contract(contractAddress, contractABI, wallet);

// 📌 API для получения всех товаров
app.get("/products", async (req, res) => {
  try {
    const productCount = await supplyChain.productCount();
    let products = [];

    for (let i = 1; i <= productCount; i++) {
      const product = await supplyChain.products(i);
      products.push({
        id: Number(product.id),
        name: product.name,
        supplier: product.supplier,
        status: product.status,
        responsible: product.responsible,
      });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка получения данных" });
  }
});

// 📌 API для добавления нового товара
app.post("/products", async (req, res) => {
  try {
    const { name, supplier } = req.body;
    const tx = await supplyChain.addProduct(name, supplier);
    await tx.wait(); // Ждем подтверждения транзакции
    res.json({ message: "Товар добавлен", txHash: tx.hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка добавления товара" });
  }
});

// 📌 API для обновления статуса товара
app.post("/products/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;
    const tx = await supplyChain.updateStatus(id, status);
    await tx.wait();
    res.json({ message: "Статус обновлен", txHash: tx.hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка обновления статуса" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
