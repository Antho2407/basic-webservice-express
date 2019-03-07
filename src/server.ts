import app from "./app";
const PORT = 3000;

app.listen(process.env.PORT || PORT), () => {
  console.log("User picker server running on " + PORT);
});
