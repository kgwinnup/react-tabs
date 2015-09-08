
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

exports.TabContainer = React.createClass({
    mixins: [PureRenderMixin],

    render: function(){
        return(
            <div className='tab-container'>
                {this.props.children}
            </div>
        );
    }
});

exports.Tab = React.createClass({
    mixins: [PureRenderMixin],

    render: function(){
        var classnames = (this.props.active) ? 'tab active' : 'tab';
        return(
            <div className={classnames}>

                <div className='title '>
                    {this.props.title}
                    <div className='close'><a href='#' onClick={this.props.onClose}>&times;</a></div>
                </div>

            </div>
        );
    }
});
