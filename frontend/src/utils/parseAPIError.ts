import { isAxiosError } from "axios";

export const parseAPIError = (error: unknown): string => {
    if (isAxiosError(error)) {
        return error.response?.data || "An error occurred";
    } else if (error instanceof Error) {
        return error.message || "An error occurred";
    } else {
        return "An error occurred";
    }
};