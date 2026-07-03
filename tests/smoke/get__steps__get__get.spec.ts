import { test, expect } from '@playwright/test';

// basic GET step, no inputs, validates step execution
// Source: GET /steps/get/get


// ⚠ This endpoint depends on environment config: DOMAIN_URL, PORT
// A 500 error may indicate missing environment setup, not a code bug.

test.fixme('smoke: GET /steps/get/get', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/steps/get/get`);
  
  expect(response.ok()).toBeTruthy();
  
});
