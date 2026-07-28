import { test, expect } from '@playwright/test';

// POST with single input, low complexity
// Source: POST /dynamic-body


test.fixme('smoke: POST /dynamic-body', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/dynamic-body`, {
    data: {
      
      // TODO: fill required fields: body.input
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
