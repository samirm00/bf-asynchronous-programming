import data from '../src/data.js';

const getUserById = async (id) => {
    const urlEncoded = encodeURI(`${data.baseUrl}/${id}`);
    try {
        const res = await fetch(urlEncoded);
        if (!res.ok) {
            throw new Error(`Failed to fetch a user with status ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(`Error while fetching a user`);
        return null;
    }
};

export default getUserById;
