import React, { useState, useEffect } from "react";
import { urlLookup } from '../../utils/api';
import PlayerAudio from './../PlayerAudio/PlayerAudio';

interface ITrack {
    albumId: string
}

const Track: React.FC<ITrack> = ({albumId}) => {
    const [tracks, setTracks] = useState<any[]>([]);

    const getTrack = (albumId: string) => {
        const headers = {
            'content-type': 'application/json'
        };
        fetch(`${urlLookup}&entity=song&id=${albumId}`, { headers })
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