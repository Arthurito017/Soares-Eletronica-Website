const express = require("express");
const app = express();

// Número do WhatsApp da empresa no formato internacional
const whatsappNumber = "5561984565646"; 

// Mensagem automática
const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para segurança eletrônica.");

// Rota de redirecionamento para o WhatsApp
app.get("/", (req, res) => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    res.redirect(whatsappURL);
});

// Iniciar o servidor na porta definida pelo Railway ou na 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
