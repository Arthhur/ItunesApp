import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlSearch, urlLookup } from '../../utils/api';
import Search from '../Search/Search';
import List from '../List/List';
import Album from '../Album/Album';



interface IArtist {
    artistId : number,
    artistName: string
};

const Artist: React.FC = () => {

    const [artists, setArtists] = useState<any []>([]);
    const [filter, setFilter] = useState('');
    const [artistName, setArtistName] = useState('');
    const [artistId, setArtistId] = useState('');

    const getArtist = (artistFilter: string) => {
        const headers = {
            'content-type': 'application/json'
        };
        axios.get(`${urlSearch}media=music&country=US&entity=musicArtist&term=${artistFilter}`, { headers })
            .then(result => {
                setArtists(result.data.results.filter((artist: any) => artist.artistName.toLowerCase().includes(artistFilter.toLowerCase())))
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