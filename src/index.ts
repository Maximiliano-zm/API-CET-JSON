import express from "express";
import FN from "./services/dataServices";
import axios from "axios";
const app = express();
app.use(express.json());
const PORT = 3001;
app.listen(PORT, () => {
  console.log("-RUN-");
});
app.route("/data").get(async function (req, res) {
  try {
    const respuesta = await FN.callUrl(req.query.url as string);
    res.json({ respuesta: respuesta });
  } catch (error) {
    console.log(error);
  }
});



//fn prueba
app.route("/pruebaData").get(async (req, res) => {

  try {

    let data =

      "client_id=d097cc02-e3e3-44b8-9cd6-dc56e5b75baa&scope=https%3A%2f%2fgama.operations.dynamics.com%2f.default&grant_type=client_credentials&client_secret=-SuZH%401F%2BatjfxU68U2%3AwXR%3DJ189%3F%5D%2BG";




    let config = {

      method: "post",

      maxBodyLength: Infinity,

      url: "https://login.microsoftonline.com/b144de9c-24dd-462b-b82f-e94de9183f99/oauth2/v2.0/token",

      headers: {

        "Content-Type": "application/x-www-form-urlencoded",

      },

      data: data,

    };

    const response = await axios.request(config).then((response) => {

        let config = {

              method: 'get',

              maxBodyLength: Infinity,

              url: 'https://gama.operations.dynamics.com/data/GMDimAttributeFinancialTagsBI',

              headers: { 

                'Authorization': 'Bearer '+ response.data.access_token, 

                'Content-Type': 'application/json'

              }

            };

       

            axios.request(config).then((response => {




                res.json(response.data)

            }))

    } );

  } catch (err) {

    console.log(err);

  }

});