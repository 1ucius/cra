import React, { Component } from 'react';
import     {secToTime}      from '../helpers';
import     {debounce}       from 'lodash';


export default class Slider extends Component {
    state = {
        type:             this.props.type,
        duration:         this.props.duration,
        value:            this.props.value,
        progress:         this.props.progress,
        drag_size:        this.props.drag_size,
        direction:        this.props.direction,
        force_update:     this.props.force_update,
        dragging:         false,
        autohide:         this.props.autohide
    };


    componentWillMount = () => {
        this.callback           = this.props.callback;
        this.slider_drag        = React.createRef();
        this.slider_bar         = React.createRef();
        this.slider_progress    = React.createRef();
    }

    
    componentDidMount = () => {
        this.recalculateOffsets();
        window.addEventListener('resize', debounce(this.recalculateOffsets, 400));
    }


    componentWillUnmount = () => {
        window.removeEventListener('resize', debounce(this.recalculateOffsets, 400));
    }


    componentWillReceiveProps = props => {
        if (props !== this.props && this.state.dragging === false) {
            this.setState(props);
        }
    }


    recalculateOffsets = () => {
        if (this.slider_bar.current != null) {
            this.slider_bar_left  = this.slider_bar.current.getBoundingClientRect().left;
            this.slider_bar_width = this.slider_bar.current.getBoundingClientRect().width;
        }
    };


    updateProgress = (e, additional_props) => {
        let left     = e.clientX;
        let progress = this.state.value*((left - this.slider_bar_left)/this.slider_bar_width);

        progress = progress > this.state.value ? this.state.value : progress < 0 ? 0 : progress;

        let new_props = {
            progress: progress
        }

        if (additional_props !== undefined) {
            Object.keys(additional_props).map(key => {
               return new_props[key] = additional_props[key];
            });
        }

        this.setState(new_props, 
            () => {
                if (this.state.dragging === false || this.state.force_update) {
                    let devider = this.state.type === 'volume' ? 100 : 1;
                    this.callback(progress/devider);
                    this.allow_progress = false;
                }
            }
        );
    }


    pointerDown = () => {
        this.setState({
                        dragging: true
                      }, () => this.allow_progress = true);
        window.addEventListener('pointermove', this.updateProgress);
        window.addEventListener('pointerup', this.pointerUp);
    }


    pointerUp = e => {
        window.removeEventListener('pointermove', this.updateProgress);
        window.removeEventListener('pointerup', this.pointerUp);
        this.updateProgress(e, {dragging: false});
    }

    
    render() {

        let cur = this.state.type === 'volume' ? Math.round(this.state.progress) : secToTime(this.state.progress);
        let progress_bar_length  = `${this.state.progress/this.state.value*100}%`;


        return (
            <div className={`slider ${this.state.dragging ? 'slider_dragging' : ''} ${this.state.autohide ? 'slider_autohide' : ''}`}>
                <span 
                    className = "slider__bar" 
                    ref       = {this.slider_bar} 
                    onClick   = {this.pointerUp}
                >
                    <span 
                        className = "slider__cur"
                        ref       = {this.slider_progress}
                        style     = {{width: progress_bar_length}}
                    >
                    </span>
                    <span 
                        className     = "slider__drag" 
                        onPointerDown = {this.pointerDown}
                        ref           = {this.slider_drag}
                        style         = {{
                                            left:   progress_bar_length, 
                                            width:  `${this.state.drag_size}px`, 
                                            height: `${this.state.drag_size}px`
                                        }}
                    >
                    </span>
                </span>
                <div className="slider__range roboto xxsmall-font">
                    <span className="slider__range-cur">{cur}</span>
                    <span className="slider__range-length">{this.state.duration}</span>
                </div>
            </div>
        )
    }
}