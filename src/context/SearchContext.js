import React from 'react';

export const SearchContext = React.createContext({});

export class SearchProvider extends React.Component {
    state = {
        searchText: '',

        set: (searchText) => {
            this.setState({ searchText });
        },
    };

    render() {
        const { children } = this.props;

        return (
            <SearchContext.Provider value={this.state}>
                {children}
            </SearchContext.Provider>
        );
    }
}
