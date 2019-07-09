import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const responds = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization:
                    'Client-ID 7e0e830ffa64c0939f150d5f3bac06907f65017f48e4d7d146b801ab294dfa3c'
            }
        });

        console.log(this);
        this.setState({images: responds.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App;