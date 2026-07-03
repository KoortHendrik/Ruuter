import { test, expect } from '@playwright/test';

// simple GET with no inputs, good baseline
// Source: GET /common/skip


test.fixme('smoke: GET /common/skip', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/common/skip`);
  
  expect(response.ok()).toBeTruthy();
  
});
