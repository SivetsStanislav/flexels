import axios from "axios";

const authorization = 'Bearer 563492ad6f917000010000017a40019704e145378143573cf4c43fa6';

export const pexelsApiClient = axios.create({
    headers: {
        Authorization: authorization,
    },
});
