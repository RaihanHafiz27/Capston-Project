export const getUsers = async () => {
  const data = await fetch("https://fakestoreapi.com/users").then((response) =>
    response.json()
  );

  console.log(data);
};
