import { test, expect } from '@playwright/test';

// simple POST endpoint
// Source: POST /dynamic-body


test.fixme('smoke: POST /dynamic-body', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/dynamic-body`, {
    data: {
      
      // TODO: add request body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
