import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const responds = await Unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization:
                    'Client-ID 7e0e830ffa64c0939f150d5f3bac06907f65017f48e4d7d146b801ab294dfa3c'
            }
        });

        this.setState({images: responds.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;