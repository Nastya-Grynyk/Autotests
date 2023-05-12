const users = {
    stage: {
        user: {
            email: 'test-auto@test.com',
            password: '123$qwe',
        },
        admin: {
            email: 'admin01.nolimit',
            password: '123qweQ!',
        }
    },
    prod: {
        user: {
            email: 'testUser@test.com',
            password: '123qweQ!',
        },
        admin: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
    },
}
exports.users = users;