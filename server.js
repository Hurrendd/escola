import app from "./app";

const porta = 3001;
app.listen(porta, () => {
  console.log();
  console.log(`Executando na porta ${porta}`);
  console.log(`http://localhost:${porta}`);
});
