import React from 'react';

// Assign many contexts
export const mapContexts = (contextsObj) => (Component) => (props) => {
    const contextProps = Object.entries(contextsObj).reduce((currProps, [key, context]) => {
        const currContext = React.useContext(context);

        return {
            ...currProps,
            [key]: { ...currContext },
        };
    }, {});

    return <Component {...contextProps} {...props} />;
};

// Use single context
export const withContext = (Context) => (Component) => (props) => (
    <Context.Consumer>
        {
            (value) => (
                <Component {...value} {...props} />
            )
        }
    </Context.Consumer>
);
