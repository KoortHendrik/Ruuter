import { test, expect } from '@playwright/test';

// primary health check endpoint
// Source: GET /healthz


test.fixme('smoke: GET /healthz', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/healthz`);
  
  expect(response.ok()).toBeTruthy();
  
});
