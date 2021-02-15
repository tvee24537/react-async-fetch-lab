// create your App component here
import React from 'react';

class App extends React.Component {
    state = { inSpaceNow: [] }

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    inSpaceNow: data.people
                })
            })
        }

    render() {
        const peopleInSpace = this.state.inSpaceNow.map((astronaut, idx) => {
        return <div key={idx}>Astronaut: {astronaut.name} - Space Craft: {astronaut.craft}</div>
        })
        return (
            <div>
                {peopleInSpace}
            </div>
        )
    }
}

export default App; 