import { UnknownError } from "./unknown-error";

export class BadRequestError implements UnknownError {
    get errorCode(): number {
        return 400;
    }
    get statusText(): string {
        return "The request is not well constructed";
    }
}