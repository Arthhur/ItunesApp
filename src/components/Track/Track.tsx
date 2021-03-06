import React, { useState, useEffect } from "react";
import { urlLookup } from '../../utils/api';
import PlayerAudio from './../PlayerAudio/PlayerAudio';
import fetchJsonp from 'fetch-jsonp';


interface ITrack {
    albumId: string
}

const Track: React.FC<ITrack> = ({albumId}) => {
    const [tracks, setTracks] = useState<any[]>([]);

    const getTrack = (albumId: string) => {
        fetchJsonp(`${urlLookup}&entity=song&id=${albumId}`)
        .then(result => result.json())
        .then(tracks => {
                setTracks(tracks.results.filter((track: any) => track.wrapperType === 'track'));
            });
    }

    useEffect(() => {
        getTrack(albumId);
    }, [albumId]);

    return (
        <div>
            {tracks.map(track => (
                <PlayerAudio key={track.trackId} track={track} />
            ))}
        </div>    
    );
}

export default Track;