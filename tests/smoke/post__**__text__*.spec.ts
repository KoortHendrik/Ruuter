import { test, expect } from '@playwright/test';

// wildcard POST, tests routing and request handling
// Source: POST /**/text/*


test.fixme('smoke: POST /**/text/*', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/**/text/*`, {
    data: {
      
      // TODO: add request body
      
    }
  });
  
  expect(response.ok()).toBeTruthy();
  
});
