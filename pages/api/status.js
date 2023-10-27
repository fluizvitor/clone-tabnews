const { sendError } = require("next/dist/server/api-utils");

function status(request, response) {
  response.status(200).send("TOP");
}
