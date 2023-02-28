const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          user: "Monkey",
          admin: true,
        },
      });
    }, 3000);
  });
};

const login = (user) => {
  if (user.admin === true) {
    console.log("Successfully logged in!");
  } else {
    console.log("Failed to log in, please try again");
  }
};

console.log("Program starting");

const awaitUser = async () => {
  const user = await fetchUser();
  console.log(user);
  login(user.data);
};

awaitUser();

console.log("Program complete!");
