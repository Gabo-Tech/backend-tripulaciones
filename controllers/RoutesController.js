const axios = require("axios");

const RoutesController = {
    async getAllRoutes(req, res) {
        try {
            const result = await axios("https://pilgrimtests.000webhostapp.com/mockapi/getall/");            
            res.status(201).send([result.data]);
        } catch (error) {
            console.error(error)
            res.send({ message: "There has been a problem getting the routes" })
        }
    }
};

module.exports = RoutesController;