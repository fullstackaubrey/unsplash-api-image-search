import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term.toLowerCase());
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Search for photos by keyword</label>
                <input value={term} onChange={handleChange}/>
                <p>
                {term.length < 3 && 
                'Note: Search keyword must be 3 characters or longer!'
                }
                </p>
            </form>
        </div>
    );
}

export default SearchBar;