export class UserCreatedAt {
    value: Date;
    
    constructor(value: Date) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!(this.value instanceof Date)) {
            throw new Error("Invalid date");
        }
    }
}