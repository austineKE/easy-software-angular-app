export class User {
    firstName: string;
    userName: string;
    lastName: string;
    phoneNumber: number;
    id: number;
    password: string;
    roomNumber: string;
    constructor(
        firstName: string,
        lastName: string,
        userName: string,
        phoneNumber: number,
        id: number,
        password: string,
        roomNumber: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.id = id;
        this.roomNumber = roomNumber;
    }


}
