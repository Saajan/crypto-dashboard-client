const EXPRESS_SERVER_LINK = process.env.REACT_APP_SERVER_URL;


export const login = async (payload) => {
    try {
        console.log(payload);
        const response = await fetch(`${EXPRESS_SERVER_LINK}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        });
        return {
            isError: false,
            response,
        };
    } catch (e) {
        console.log('catching in login api');
        return {
            isError: true,
        };
    }
};