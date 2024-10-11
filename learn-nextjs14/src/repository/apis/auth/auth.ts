export const getAuthToken = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2));
    return 'AUTH-TOKEN'
}

