import { test, expect } from '@playwright/test';

// simple POST endpoint
// Source: POST /steps/post/post-with-plaintext-value


test.fixme('smoke: POST /steps/post/post-with-plaintext-value', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/steps/post/post-with-plaintext-value`, {
    data: {
      
      // TODO: add request body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
