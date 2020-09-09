import React, { useState, useEffect } from "react";
import CollapseTable from '../CollapseTable/CollapseTable';
import { urlLookup } from "../../utils/api";
import axios from 'axios';
import { IArtist } from "../../interfaces/IArtist";


const Album: React.FC<IArtist> = ({artist}) => {
    const [albums, setAlbums] = useState<any []>([]);


    const getAlbum = (artistId: string) => {
        const headers = {
            'content-type': 'application/json'
        };
        axios.get(`${urlLookup}entity=album&id=${artistId}`, { headers })
            .then(result => {
                setAlbums(result.data.results.filter((album: any) => album.wrapperType === 'collection'));
            });
    }

    
    useEffect(() => {
        if(artist.artistId !== undefined) {
            getAlbum(artist.artistId);
        }
    }, [artist]);

    return (
        <CollapseTable albums={albums}/>
    );
}

export default Album;