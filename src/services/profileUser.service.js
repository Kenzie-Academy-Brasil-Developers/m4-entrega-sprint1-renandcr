import users from "../database/usersDb";

const profileUserService = ({ id }) => {
  const user = users.find((user) => user.id === id);

  const { name, email, isAdm, createdOn, updatedOn } = user;

  const userProfile = { name, email, isAdm, createdOn, updatedOn, id };

  return userProfile;
};
export default profileUserService;
