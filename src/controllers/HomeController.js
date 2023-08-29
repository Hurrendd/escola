import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Hurrendd",
      sobrenome: "de Sousa Ramos",
      email: "hurrendd.ramos@gmail.com",
      idade: 43,
      peso: 81,
      altura: 1.73,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
