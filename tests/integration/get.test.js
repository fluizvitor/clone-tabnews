test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("luizvitor.com.br/api/v1/status");
  expect(response.status).toBe(200);
});
