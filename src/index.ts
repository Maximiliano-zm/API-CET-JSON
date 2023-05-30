import express from "express";
import FN from "./services/dataServices";
const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
  console.log("------------------------");
});
app.route("/data").get(async function (req, res) {
  try {
    const respuesta = await FN.callUrl(req.query.url as string);
    res.json({ respuesta: respuesta });
  } catch (error) {
    console.log(error);
  }
});
