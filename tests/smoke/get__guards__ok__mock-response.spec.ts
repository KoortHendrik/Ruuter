import { test, expect } from '@playwright/test';

// simple GET endpoint
// Source: GET /guards/ok/mock-response


test.fixme('smoke: GET /guards/ok/mock-response', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/guards/ok/mock-response`);
  
  expect(response.ok()).toBeTruthy();
  
});
