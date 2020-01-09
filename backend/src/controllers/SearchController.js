const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

class SearchController {
  async index(request, response) {
    try {
      const { longitude, latitude, techs } = request.query;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return response.status(200).json(devs);
    } catch (err) {
      return response.status(400).json({
        message: "Operação indisponível",
      });
    }
  }
}

module.exports = new SearchController();
