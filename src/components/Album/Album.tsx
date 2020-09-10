import React, { useState, useEffect } from "react";
import CollapseTable from '../CollapseTable/CollapseTable';
import { urlLookup } from "../../utils/api";
import { IArtist } from "../../interfaces/IArtist";
import fetchJsonp from 'fetch-jsonp';


const Album: React.FC<IArtist> = ({artist}) => {
    const [albums, setAlbums] = useState<any []>([]);


    const getAlbum = (artistId: string) => {
        fetchJsonp(`${urlLookup}entity=album&id=${artistId}`)
            .then(result => result.json())
            .then(albums => {
                setAlbums(albums.results.filter((album: any) => album.wrapperType === 'collection'));
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