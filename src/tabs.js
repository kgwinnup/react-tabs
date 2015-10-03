
import React from 'react';

exports.TabContainer = React.createClass({

    render: function(){
        return(
            <div className='tab-container'>
                {this.props.children}
            </div>
        );
    }
});

exports.TabNew = React.createClass({
    render: function(){
        return(
            <div className='tab-new'></div>
        );
    }
});

exports.Tab = React.createClass({

    render: function(){
        var classnames = (this.props.active) ? 'tab active' : 'tab';
        return(
            <div className={classnames}>

                <div className='title '>

                    {this.props.title}

                    <div className='close'>
                        <a href='#' onClick={this.props.onClose}>&times;</a>
                    </div>
                </div>

            </div>
        );
    }
});
