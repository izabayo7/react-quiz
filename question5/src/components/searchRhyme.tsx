import { useEffect, useState } from 'react'
import '../assets/css/searchRhyme.css'
import AppServices from '../services'

function SearchRhyme() {
    const [searchWord, setSearchWord] = useState('');
    const [results, setResults] = useState<{ word: string }[]>([]);

    const handleSearch = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setResults([]);

        if (searchWord.length) {
            setResults(await AppServices.getWordsThatRhymeLike(searchWord));
        }
    }
    useEffect(()=>{
        handleSearch({preventDefault:()=>{}});
    },[searchWord])

    return (
        <div className="search">
            <div className="card">
                <div className="input-container">
                    <form onSubmit={handleSearch} className="position-relative">
                        <input type="text" placeholder="search for a word" onChange={(e) => setSearchWord(e.target.value)} />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                        </button>
                    </form>
                </div>
                <div className="results">
                    {
                        searchWord.length ?
                            results.length ?
                                results.map((e, i) =>
                                    <div key={i} className="result">
                                        {e.word}
                                    </div>)
                                : <div className='result center'>No results found </div>
                            : <div className='result center'>Search for a word</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchRhyme
