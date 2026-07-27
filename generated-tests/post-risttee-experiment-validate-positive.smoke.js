const { test, expect } = require("@playwright/test");

test.describe("POST /risttee-experiment/validate positive", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";

  test("returns configured success status 200", async ({ request }) => {
    const response = await request.post(baseUrl + "/risttee-experiment/validate", {
      data: {
        "name": "Grounded name",
      },
    });
    expect(response.status()).toBe(200);
  });
});
