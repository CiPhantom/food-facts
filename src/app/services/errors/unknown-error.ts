import { ServiceError } from "./service-errors";

export class UnknownError implements ServiceError {

    get errorCode(): number {
        return 0;
    }
    
    get statusText(): string {
        return "Unknown Error";
    }

}