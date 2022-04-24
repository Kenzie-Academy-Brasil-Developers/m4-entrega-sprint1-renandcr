import storeRepositoriesService from "../services/repositories/storeRepositories.service";
import showAllRepositoriesService from "../services/repositories/showAllRepositories.service";
import loginRepositoriesService from "../services/repositories/loginRepositories.service";
import showProfileRepositoriesService from "../services/repositories/showProfileRepositories.service";
import deleteRepositoriesService from "../services/repositories/deleteRepositories.service";
import updateRepositoriesService from "../services/repositories/updateRepositories.service";

export default class RepositoriesController {
  async store(request, response) {
    const { name, email, password, isAdm } = request.body;

    try {
      const user = await storeRepositoriesService({
        name,
        email,
        password,
        isAdm,
      });
      response.status(201).json(user);
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  showAll(request, response) {
    const users = showAllRepositoriesService();
    response.status(200).json(users);
  }

  showProfile(request, response) {
    const { uuid } = request.user;
    const user = showProfileRepositoriesService({ uuid });

    response.status(200).json(user);
  }

  update(request, response) {
    const { id } = request.params;

    try {
      const { name, email } = request.body;

      const user = updateRepositoriesService({
        name,
        email,
        id,
      });

      response.status(200).json(user);
    } catch (err) {
      response.status(401).json({ message: err.message });
    }
  }

  delete(request, response) {
    const { id } = request.params;
    try {
      const successMessage = deleteRepositoriesService({ id });
      response.status(200).json(successMessage);
    } catch (err) {
      response.status(401).json({ message: err.message });
    }
  }

  login(request, response) {
    const { email, password } = request.body;

    try {
      const tokenUser = loginRepositoriesService({ email, password });
      response.status(200).json({ token: tokenUser });
    } catch (err) {
      response.status(401).json({ message: err.message });
    }
  }
}
