/* import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';

interface Song {
    name: string;
    author: string;
    code: string;
}

const App: React.FC = () => {
    const [nationalSongs, setNationalSongs] = useState<Song[]>([]);
    const [internationalSongs, setInternationalSongs] = useState<Song[]>([]);
    const [songs, setSongs] = useState<Song[]>([]);
    const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const songsPerPage = 100;

    const handleFileToggleInt = () => {
        setSongs(internationalSongs);
    };

    const handleFileToggleNat = () => {
        setSongs(nationalSongs);
    };

    const fetchData = async (dataSource: string): Promise<Song[]> => {
        try {
            const response = await fetch(`data/${dataSource}.csv`);
            const reader = response.body?.getReader();
            const result = await reader?.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result?.value);
            const parsedData = Papa.parse<Song>(csv, { header: true, skipEmptyLines: true });
            return parsedData.data;
        } catch (error) {
            console.error(`Error fetching ${dataSource} data:`, error);
            return [];
        }
    };

    useEffect(() => {
        const loadSongs = async () => {
            const [national, international] = await Promise.all([
                fetchData('Nacional'),
                fetchData('Internacional')
            ]);
            setNationalSongs(national);
            setInternationalSongs(international);
            setSongs(international);
        };

        loadSongs();
    }, []);

    useEffect(() => {
        const filtered = songs.filter(song =>
            song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCurrentPage(1);
        setFilteredSongs(filtered);
    }, [songs, searchQuery]);

    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;

    const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <button onClick={handleFileToggleInt}>Internacional</button>
            <button onClick={handleFileToggleNat}>Nacional</button>
            <SearchBar setSearchQuery={setSearchQuery} />
            <Pagination
                songsPerPage={songsPerPage}
                totalSongs={filteredSongs.length}
                paginate={paginate}
            />
            <SongList songs={currentSongs} />
        </>
    );
};

export default App;
 */

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import { StyledContainer, StyledButtonGroup, StyledButton } from './styles';

interface Song {
    name: string;
    author: string;
    code: string;
}

const App: React.FC = () => {
    const [nationalSongs, setNationalSongs] = useState<Song[]>([]);
    const [internationalSongs, setInternationalSongs] = useState<Song[]>([]);
    const [songs, setSongs] = useState<Song[]>([]);
    const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const songsPerPage = 100;

    const handleFileToggleInt = () => {
        setSongs(internationalSongs);
    };

    const handleFileToggleNat = () => {
        setSongs(nationalSongs);
    };

    const fetchData = async (dataSource: string): Promise<Song[]> => {
        try {
            const response = await fetch(`data/${dataSource}.csv`);
            const reader = response.body?.getReader();
            const result = await reader?.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result?.value);
            const parsedData = Papa.parse<Song>(csv, { header: true, skipEmptyLines: true });
            return parsedData.data;
        } catch (error) {
            console.error(`Error fetching ${dataSource} data:`, error);
            return [];
        }
    };

    useEffect(() => {
        const loadSongs = async () => {
            const [national, international] = await Promise.all([
                fetchData('Nacional'),
                fetchData('Internacional')
            ]);
            setNationalSongs(national);
            setInternationalSongs(international);
            setSongs(international);
        };

        loadSongs();
    }, []);

    useEffect(() => {
        const filtered = songs.filter(song =>
            song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCurrentPage(1);
        setFilteredSongs(filtered);
    }, [songs, searchQuery]);

    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;

    const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <StyledContainer>
            <StyledButtonGroup>
                <StyledButton onClick={handleFileToggleInt}>Internacional</StyledButton>
                <StyledButton onClick={handleFileToggleNat}>Nacional</StyledButton>
            </StyledButtonGroup>
            <SearchBar setSearchQuery={setSearchQuery} />
            <SongList songs={currentSongs} />
            <Pagination
                songsPerPage={songsPerPage}
                totalSongs={filteredSongs.length}
                paginate={paginate}
            />
        </StyledContainer>
    );
};

export default App;
