import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div className="app-body">
            <h2 className="app-title">Unsplash Image Search</h2>
                    <SearchBar onSubmit={handleSubmit} />
                    <ImageList images={images}/>
        </div>
    );
}

export default App;