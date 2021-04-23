export class Data {
    id: string;
    username: string;
    createdAt: string;
    name: string;
    avatar: string;
    email: string;
    phoneNumber: string;
    constructor(
        id: string,
    username: string,
    createdAt: string,
    name: string,
    avatar: string,
    email: string,
    phoneNumber: string
    ) {
           this.id = id;
           this.username = username;
           this.createdAt = createdAt;
           this.name = name;
           this.avatar = avatar;
           this.email = email;
           this.phoneNumber = phoneNumber
    }


}
