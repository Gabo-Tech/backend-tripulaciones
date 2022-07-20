const axios = require("axios");

const RoutesController = {
    async getAllRoutes(req, res) {
        try {
            const result = await axios("https://pilgrimtests.000webhostapp.com/mockapi/getall/");            
            res.status(201).send([result.data]);
        } catch (error) {
            console.error(error);
            res.send({ message: "Hubo un problema obteniendo las rutas" });
        }
    },
    async getRouteById (req,res) {
        try {
            const result = await axios(`https://pilgrimtests.000webhostapp.com/mockapi/getById/${req.params.id}`);
            res.status(201).send([result.data]);
        } catch (error) {
            console.error(error);
            res.send({ message: "Hubo un problema obteniendo la ruta" });
        }
    }
};

module.exports = RoutesController;