import  {app}  from "./app.js";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
  });