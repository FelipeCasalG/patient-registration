export const getAPIBaseUrl = (): string => {
    try {
        return process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";
    } catch (error) {
        console.error("Error getting API base URL", error);
        return "http://localhost:5001";
    }
};