export const handler = async (event, context) => {
    try {


        console.log("Date Now : "+Date.now());

        return {
            statusCode: 200,
            body: 'OK',
        }

    } catch (err) {
        console.log(err);
        return err;
    }
};