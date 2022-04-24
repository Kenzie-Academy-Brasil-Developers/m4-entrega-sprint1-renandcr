import users from "../../database/users";

const showProfileRepositoriesService = ({ uuid }) => {
  const user = users.find((user) => user.id === uuid);

  const { name, email, createdOn, updatedOn, isAdm } = user;

  const userProfile = { name, email, createdOn, updatedOn, isAdm, id: uuid };

  return userProfile;
};
export default showProfileRepositoriesService;
