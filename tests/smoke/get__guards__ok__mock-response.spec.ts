import { test, expect } from '@playwright/test';

// GET with guard true, verifies guarded endpoint handling
// Source: GET /guards/ok/mock-response

// ⚠ This endpoint has a .guard file — authentication may be required.


test.fixme('smoke: GET /guards/ok/mock-response', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/guards/ok/mock-response`);
  
  expect(response.ok()).toBeTruthy();
  
});
