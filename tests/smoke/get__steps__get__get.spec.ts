import { test, expect } from '@playwright/test';

// simple GET endpoint
// Source: GET /steps/get/get


test.fixme('smoke: GET /steps/get/get', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/steps/get/get`);
  
  expect(response.ok()).toBeTruthy();
  
});
