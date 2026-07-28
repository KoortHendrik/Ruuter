import { test, expect } from '@playwright/test';

// simple GET with no inputs
// Source: GET /common/sleep


test.fixme('smoke: GET /common/sleep', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/common/sleep`);
  
  expect(response.ok()).toBeTruthy();
  
});
