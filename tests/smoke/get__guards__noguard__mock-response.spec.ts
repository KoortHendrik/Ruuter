import { test, expect } from '@playwright/test';

// simple GET endpoint
// Source: GET /guards/noguard/mock-response


test.fixme('smoke: GET /guards/noguard/mock-response', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/guards/noguard/mock-response`);
  
  expect(response.ok()).toBeTruthy();
  
});
