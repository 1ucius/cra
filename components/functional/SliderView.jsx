import React from 'react';


const SliderView = React.memo(props => {
    return (
        <div className={`slider ${props.dragging ? 'slider_dragging' : ''} ${props.autohide ? 'slider_autohide' : ''}`}>
            <span 
                className = "slider__bar" 
                ref       = {props.slider_bar} 
                onClick   = {props.pointerUp}
            >
                <span 
                    className = "slider__cur"
                    ref       = {props.slider_progress}
                    style     = {{width: props.length}}
                >
                </span>
                {/* {buffered} */}
                <span 
                    className     = "slider__drag" 
                    onPointerDown = {props.pointerDown}
                    ref           = {props.slider_drag}
                    style         = {{
                                        left:   props.length, 
                                        width:  `${props.drag_size}px`, 
                                        height: `${props.drag_size}px`
                                    }}
                >
                </span>
            </span>
            <div className="slider__range roboto xxsmall-font">
                <span className="slider__range-cur">{props.cur}</span>
                <span className="slider__range-length">{props.duration}</span>
            </div>
        </div>
    )
});

export default SliderView;