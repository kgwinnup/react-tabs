
var React = require('react');
var TabContainer = require('./tabs.jsx').TabContainer;
var Tab = require('./tabs.jsx').Tab;

require('./tabs.scss');
require('./index.html');

var Demo = React.createClass({

    render: function(){
        return(
            <TabContainer>
                <Tab title='tab 2' active={false} />
                <Tab title='tab 2' active={false} />
                <Tab title='tab 1' active={true} />
                <Tab title='tab 2' active={false} />
            </TabContainer>
        )
    }
});

React.render(<Demo />, document.getElementById('app'));
