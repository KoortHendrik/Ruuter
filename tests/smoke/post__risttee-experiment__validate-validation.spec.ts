import { test, expect } from '@playwright/test';

// DSL-derived validation tests for POST /risttee-experiment/validate.
// These expectations are parsed from DSL text, not verified against runtime behavior.


// Derived from DSL: omitting body.name triggers status 400.
// DSL-declared behavior — not verified against a running instance.
test.fixme('validation: POST /risttee-experiment/validate — missing body.name', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL}/risttee-experiment/validate`, {
    data: {
      // omit: body.name
    }
  });
  expect(response.status()).toBe(400);
});



