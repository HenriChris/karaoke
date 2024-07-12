import React from 'react';
import { StyledTable, StyledTh, StyledTd, StyledTr } from './styles';

interface Song {
    name: string;
    author: string;
    code: string;
}

interface SongListProps {
    songs: Song[];
}

function SongList({ songs }: SongListProps) {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <StyledTh>Song Name</StyledTh>
                    <StyledTh>Author</StyledTh>
                    <StyledTh>Code</StyledTh>
                </tr>
            </thead>
            <tbody>
                {songs.map((song) => (
                    <StyledTr key={song.code}>
                        <StyledTd>{song.name}</StyledTd>
                        <StyledTd>{song.author}</StyledTd>
                        <StyledTd>{song.code}</StyledTd>
                    </StyledTr>
                ))}
            </tbody>
        </StyledTable>
    );
}

export default SongList;
