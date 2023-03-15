const {request} = require('@playwright/test');

exports.baseAPI = class baseAPI {
    constructor(request) {
     this.baseUrl = "http://stage.qa.nolimit.school/back-office"
    }
   
    async getToken(username, password) {
     this.request = await request.newContext();
     let response = await this.request.post(`${this.baseUrl}/api/auth/local`, {
      headers: this.standardHeaders,
      data: {
        identifier: username,
       password: password,
      },
     })
     const responceBody = JSON.parse(await response.text());
     const jwt = responceBody.jwt;
     return  jwt;
    }
   
    async addDoctors() {
    this.request = await request.newContext();
     let setupCall = await this.request.post(`${this.baseUrl}/api/doctors`, {
      headers: {
       authorization: `Bearer ${this.jwt}`,
      },
      data: {
                fullName: 'testauto',
                gender: 'male',
                address: 'test',
                specialization: 'tst',
                department: '00999988987989'
        }
      },
     )
    
     if (setupCall.status() == 200) {
      console.log("Product is now setup correctly")
     }
    };
}