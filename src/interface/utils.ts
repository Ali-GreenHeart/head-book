import { HttpStatusCode } from "axios";

export interface IBackendErrorMessage {
    status: HttpStatusCode;
    message: string;
}

