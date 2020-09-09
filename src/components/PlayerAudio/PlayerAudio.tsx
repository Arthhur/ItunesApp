import React from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

interface IPlayerAudio {
    track: any
}
const PlayerAudio: React.FC<IPlayerAudio> = ({track}) => {

    return (
        <React.Fragment>
            <List key={track.trackId}>
                <ListItem alignItems="center">
                    <ListItemText 
                        primary={track.trackName} 
                    />
                     <audio
                        controls
                        src={track.previewUrl}>
                    </audio> 
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </React.Fragment>
    );
}

export default PlayerAudio;