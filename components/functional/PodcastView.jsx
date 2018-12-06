import React from 'react';

const PodcastView = React.memo(props =>{
    if (props.shown) {
        return (
            <>
                <div 
                    className = "podcast__cover"
                    style     = {{backgroundImage: `url(${props.cover_image})`}}
                >
                </div>
                <div className="podcast__wrapper">
                    <div className="podcast__title">
                        <p>{props.title}</p>
                        <p>{props.publishing_date}</p>
                    </div>
                </div>
            </>
        )
    }
});

export default PodcastView;