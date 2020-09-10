import React, { useState, useEffect } from "react";
import { urlSearch } from '../../utils/api';
import Search from '../Search/Search';
import List from '../List/List';
import fetchJsonp from 'fetch-jsonp';


const Artist: React.FC = () => {

    const [artists, setArtists] = useState<any []>([]);
    const [filter, setFilter] = useState('');

    const getArtist = (artistFilter: string) => {
        fetchJsonp(`${urlSearch}media=music&country=US&entity=musicArtist&term=${artistFilter}`)
            .then(result => result.json())
            .then(artists => {
                setArtists(artists.results.filter((artist: any) => artist.artistName.toLowerCase().includes(artistFilter.toLowerCase())))
            });
    }

    const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.currentTarget.value !== '') {
            setFilter(event.currentTarget.value);
            getArtist(filter);
        }
        else {
            setFilter('');
            setArtists([]);
        }
    }

    useEffect(() => {
        getArtist(filter);
    }, [filter]);

    return (
        <div>
            <Search query={filter} change={onChangeFilter} />
            <List artists={artists} />
        </div>
    );
}

export default Artist;