export class User {

    constructor(
        public username: string,
        public password: string
    ) {
        let user = new User('aaa',
            'a');
        console.log('My username is ' + user.username);
    }
}
