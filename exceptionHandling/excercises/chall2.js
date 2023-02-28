try {
  const user = {
    name: "misha",
    age: 22,
    settings: {
      colour: "blue",
    },
  };
  console.log("Creating user...");
  console.log(user.profile.colour);
  console.log("user created");
} catch (err) {
  console.error(err);
}
