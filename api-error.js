class ApiError {
    status;
    errors;

    constructor(status, message, errors = []) {
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, "the User is not authorized");
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}
export default { ApiError };
