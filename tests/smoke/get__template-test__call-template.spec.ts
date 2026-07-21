import { test, expect } from '@playwright/test';

// guarded GET invoking a template, high‑value functional test
// Source: GET /template-test/call-template

// ⚠ This endpoint has a .guard file — authentication may be required.


test.fixme('smoke: GET /template-test/call-template', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/template-test/call-template`);
  
  expect(response.ok()).toBeTruthy();
  
});
