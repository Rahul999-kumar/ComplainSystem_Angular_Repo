export class NewUserRegistration {
    constructor(
        public UserRegistrationId: number,

        public Email: string,
        public MobileNo: string,
        public Username: string,
        public Password: string,
        public LastLogin: Date = new Date(),
        private _token: string,
        private _tokenExpirationdate: Date
    ) { }


    get token() {
        if (!this._tokenExpirationdate || new Date() > this._tokenExpirationdate) {
            return null;
        } else {
            return this._token;
        }
    }
}
