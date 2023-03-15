const {request} = require('@playwright/test');
const {baseAPI} = require('./baseAPI');

exports.loginAPI = class LoginAPI extends baseAPI {
    constructor(request) {
        super(request);
        this.enpoint='/api/auth/local';
    };
   
    async getToken(username, password) {
     this.request = await request.newContext();
     let response = await this.request.post(`${this.baseUrl}`+`${this.enpoint}`, {
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
}