export const getAuthToken = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2));
    return {
        name: "정석무",
        type: 'USER',
        accessToken: "TEST-TOKEN"
    }
}

