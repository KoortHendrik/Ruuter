import { test, expect } from '@playwright/test';

// simple POST with one input, useful for text payload verification
// Source: POST /test-text


test.fixme('smoke: POST /test-text', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/test-text`, {
    data: {
      
      // TODO: fill required fields: body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
