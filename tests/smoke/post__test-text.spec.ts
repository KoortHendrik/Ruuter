import { test, expect } from '@playwright/test';

// simple POST endpoint
// Source: POST /test-text


test.fixme('smoke: POST /test-text', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/test-text`, {
    data: {
      
      // TODO: add request body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
