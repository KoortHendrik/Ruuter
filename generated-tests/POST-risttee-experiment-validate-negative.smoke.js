const { test, expect } = require("@playwright/test");

test.describe("POST /risttee-experiment/validate negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";

  test("missing required field body.name returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/risttee-experiment/validate", {
      data: {},
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Missing required field: name");
  });
});
