export interface IUser {
    id: string;
    name: string;
    surname: string;
    username: string;
    imageUrl: string;
    password: string;
    email: string;
    friends?: string[];
    notifications?: {
        id: string;
        message: string;
        isRead: boolean;
    }[];

}
