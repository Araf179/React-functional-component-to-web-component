import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import reactToWebComponent from 'react-to-webcomponent';

const App = ({name}) => {
    
    useEffect( () => {
        console.log("Our prop 'name':", name)
    }, []) 
    
    return <div>Hello react web component + {name}</div>
}

App.propTypes = {
    name: PropTypes.string.isRequired
};

customElements.define("web-greeting", reactToWebComponent(App, React, ReactDOM) );
