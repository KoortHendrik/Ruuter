import { test, expect } from '@playwright/test';

// POST step with no extra inputs, checks plain‑text response handling
// Source: POST /steps/post/post-with-plaintext-value


// ⚠ This endpoint depends on environment config: DOMAIN_URL, PORT
// A 500 error may indicate missing environment setup, not a code bug.

test.fixme('smoke: POST /steps/post/post-with-plaintext-value', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/steps/post/post-with-plaintext-value`, {
    data: {
      
      // TODO: add request body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
