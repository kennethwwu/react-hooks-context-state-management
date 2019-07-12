import React, { useReducer } from 'react';

export default class Store{
    static initialState = {
        post: [],
        count: 0
    }

    static reducer = (state:any, action:any) => {
        switch(action.type){
            case 'addOne': 
                return {
                    ...state,
                    count: state.count+1
                };
            default: 
                return state;
        }
        return state
    }

    static AppContext = React.createContext(Store.initialState);

    static StoreProvider = ( { children }:{children:any} ) => {
        const contextValue:any = useReducer(Store.reducer, Store.initialState);

        return (
            <Store.AppContext.Provider value={contextValue}>
                {children}
            </Store.AppContext.Provider>
        )
    }
}