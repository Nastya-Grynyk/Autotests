const { test, expect, request } = require('@playwright/test');


test.only('API login test', async ({ request }) => {
  const response = await request.post(`http://stage.qa.nolimit.school/back-office/api/auth/local`, {
    data: {
      identifier: "dddd@ff.com",
      password: "Testr_123",
    },
  })
  await expect(response).toBeOK();
  const responceBody = JSON.parse(await response.text());
  const jwt = responceBody.jwt;
  const id = responceBody.user.id;
  await expect(id).toEqual(1221);
  console.log(id);
  console.log(responceBody)
})