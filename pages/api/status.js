function status(request, response) {
  response.status(200).json({ chave: "TOP" });
}

export default status;
