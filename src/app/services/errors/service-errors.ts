export interface ServiceError {
    get errorCode() : number;
    get statusText(): string;
}