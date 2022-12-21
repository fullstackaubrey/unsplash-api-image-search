import axios from 'axios';

const searchImages = async (term) => {
    const response =
    await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID T04jVa0mh_JuQgTBtC9i4emeFFxZu06ctfhJ8yTNJtI',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;