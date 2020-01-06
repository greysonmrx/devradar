const axios = require("axios");

const Dev = require("../models/Dev");

class DevController {
  async store(request, response) {
    try {
      const { github_username, techs } = request.body;

      const devExists = await Dev.findOne({ github_username });

      if (!devExists) {
        const githubResponse = await axios.get(
          `https://api.github.com/users/${github_username}`
        );

        const { name = login, avatar_url, bio } = githubResponse.data;

        const techsArray = techs.split(",").map((tech) => tech.trim());

        const dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techsArray,
        });

        return response.status(200).json(dev);
      }

      return response.status(200).json(devExists);
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: "Operação indisponível",
      });
    }
  }
}

module.exports = new DevController();
