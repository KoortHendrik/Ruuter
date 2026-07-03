import { test, expect } from '@playwright/test';

// simple POST with a single input, tests request body handling
// Source: POST /dynamic-body


test.fixme('smoke: POST /dynamic-body', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/dynamic-body`, {
    data: {
      
      // TODO: fill required fields: body.input
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
