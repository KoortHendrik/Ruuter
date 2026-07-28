import { test, expect } from '@playwright/test';

// generic GET endpoint, useful for basic availability
// Source: GET /api


test.fixme('smoke: GET /api', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/api`);
  
  expect(response.ok()).toBeTruthy();
  
});
