import { test, expect } from '@playwright/test';

// simple GET endpoint
// Source: GET /api


test.fixme('smoke: GET /api', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/api`);
  
  expect(response.ok()).toBeTruthy();
  
});
