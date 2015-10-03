
import React from 'react';
import { TabContainer, Tab, TabNew } from './tabs';

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
                <TabNew />
            </TabContainer>
        );
    }
});

React.render(<Demo />, document.getElementById('app'));
