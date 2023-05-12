import { faker } from '@faker-js/faker';

const userData = {
    generatedEmail: faker.internet.email(),
    generatedFullName: faker.name.fullName(),
    password: '123$qwe',
    generatedAge: faker.datatype.number({
        'min': 0,
        'max': 100
    }),
    generatedPhoneNumber: faker.phone.number('+48 91 ### ## ## ##'),
    generatedAddress: faker.address.city(),
}
exports.userData = userData;
