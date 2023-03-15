const {request,expect} = require('@playwright/test');
const {baseAPI} = require('./baseAPI');


exports.doctorsAPI = class DoctorsAPI extends baseAPI {
    constructor(request) {
        super(request);
        this.enpoint='/api/doctors';
    };
   
    async addDoctors(doctorPayload,  token) {
     this.request = await request.newContext();
     let response = await this.request.post(`${this.baseUrl}`+`${this.enpoint}`, {
        headers: {
            authorization: 'Bearer '+token
        },
      data: doctorPayload,
     });
     const responceBody = JSON.parse(await response.text());
     await expect(response).toBeOK();
     return  responceBody;
    }
}