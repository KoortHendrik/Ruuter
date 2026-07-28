import { test, expect } from '@playwright/test';

// simple GET that exercises step assignment logic
// Source: GET /steps/assign/assign


test.fixme('smoke: GET /steps/assign/assign', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/steps/assign/assign`);
  
  expect(response.ok()).toBeTruthy();
  
});
