import User from "../models/User";

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(request, response) {
    try {
      const allUsers = await User.findAll();
      return response.json(allUsers);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const showOneUsers = await User.findByPk(id);
      return response.json(showOneUsers);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({
          errors: ["ID não foi enviado."],
        });
      }
      const showOneUsers = await User.findByPk(id);
      if (!showOneUsers) {
        return response.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      const newData = await showOneUsers.update(request.body);
      return response.json(newData);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({
          errors: ["ID não foi enviado."],
        });
      }
      const showOneUsers = await User.findByPk(id);
      if (!showOneUsers) {
        return response.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      await showOneUsers.destroy();
      return response.status(202);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
