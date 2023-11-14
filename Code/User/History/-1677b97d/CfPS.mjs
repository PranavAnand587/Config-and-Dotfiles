export const handler = async (event, context) => {
    try {

        return {
            statusCode: 200,
            body: 'OK',
        }

    } catch (err) {
        console.log(err);
        return err;
    }
};