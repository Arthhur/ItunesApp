import React, { useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import './List.css';
import Album from "../Album/Album";

interface IArtist {
    artists: any[]
}

const ListArtist: React.FC<IArtist> = ({artists}) => {
    const [artist, setArtist] = useState<any[]>([]);

    const onClickArtist = (artistSelected: any) => {
        setArtist(artistSelected);
    }
    return (
        <div>
            {
                artists.map((artist: any) => (
                    <List id={artist.artistId} key={artist.artistId} className="liste" onClick={() => onClickArtist(artist)}>
                        <ListItem alignItems="flex-start" button>
                            <ListItemText 
                                primary={artist.artistName} 
                                className="center" 
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                ))
            }  
            <Album artist={artist} />
        </div>
    );
}

export default ListArtist;