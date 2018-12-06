import React from 'react';

const AppHeader = React.memo(props => {
  return (
    <div className="radio__header">
        <div className="container">
            <div className="logo" id="logo">
                <a href={props.link} className="logo__link">
                    <img src={props.logo} className="logo__img" alt="logo"/>
                </a>
            </div>
        </div>
    </div>
  )
});

export default AppHeader;