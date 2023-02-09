import React from "react";

const cartCtx = React.createContext({
    items: [],
    totalAmout: 0,
    addItem: (item)=>{},
    removeItems: (id) => {}
});

export default cartCtx;