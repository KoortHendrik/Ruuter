import { test, expect } from '@playwright/test';

// GET without guard, ensures unguarded path works
// Source: GET /guards/noguard/mock-response


test.fixme('smoke: GET /guards/noguard/mock-response', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/guards/noguard/mock-response`);
  
  expect(response.ok()).toBeTruthy();
  
});
