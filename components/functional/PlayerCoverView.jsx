import React from 'react';

const PlayerCoverView = React.memo(props =>{
    return (
        <div className="player__cover">
            <img 
                src={props.cover_image} 
                alt="podcast cover"
            />
            <h3 className="player__title roboto small-font">
                <p>{props.title}</p>
                <p>{props.publishing_date}</p>
            </h3>
        </div>
    );
});

export default PlayerCoverView;