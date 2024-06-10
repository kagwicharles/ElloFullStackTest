import axios from 'axios';

export async function fetchBooks(req, res) {
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/',
        headers: {
            'content-type': 'application/json'
        },
        data: {
            query: `{
                books {
                    title
                    author
                    coverPhotoURL
                    readingLevel
                }
            }`
        }
    };

    try {
        var response = await axios
            .request(options);
        console.log(response.data); // Response
        return response.data;
    } catch (error) { console.error(error); }

}