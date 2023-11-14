export const handler = async (event, context) => {
    try {

        console.log(event);

        return {
            statusCode: 200,
            body: 'OK',
        }

    } catch (err) {
        console.log(err);
        return err;
    }
};