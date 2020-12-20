import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
} from 'react-awesome-button';

window.onload = function()
{
    class Greetings extends React.Component
    {
        render()
        {
            //return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
            return (<AwesomeButton type="primary">Primary</AwesomeButton>);
        }
    }

    ReactDOM.render(
        React.createElement(Greetings, { name : 'Chris' }),
        document.getElementById('root')
    );
};