const express = require("express");
const app = express();
app.use(express.json());

let usuarios = {};

app.post("/login", (req, res) => {
  const { user } = req.body;

  if (!usuarios[user]) {
    usuarios[user] = { saldo: 100 };
  }

  res.json(usuarios[user]);
});

app.post("/jugar", (req, res) => {
  const { user, apuesta } = req.body;

  let r = Math.random();

  if (r > 0.5) {
    usuarios[user].saldo += apuesta;
    res.json({ win: true, saldo: usuarios[user].saldo });
  } else {
    usuarios[user].saldo -= apuesta;
    res.json({ win: false, saldo: usuarios[user].saldo });
  }
});

app.listen(3000, () => console.log("Servidor activo"));
