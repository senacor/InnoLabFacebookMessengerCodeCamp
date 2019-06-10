var botBuilder = require("claudia-bot-builder")

module.exports = botBuilder(
  request => {
    console.log(JSON.stringify(request))

    return (
      "Thank for sending " +
      request.text +
      ". Your message is very important to us!"
    )
  },
  { platforms: ["facebook"] }
)
