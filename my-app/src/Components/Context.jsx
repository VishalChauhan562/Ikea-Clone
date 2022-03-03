import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [productData, setProductData] = React.useState([]);
    const [select, setSelect] = React.useState("default");
    const [onHoverActiveContext, setOnHoverActiveContext] = React.useState(false);
    const [singleProduct, setSingleProduct] = React.useState([]);
    const [toCompare, setToCompare] = React.useState([]);

    return (
        <Context.Provider value={{ productData, setProductData, select, setSelect, toCompare, setToCompare, onHoverActiveContext, setOnHoverActiveContext, singleProduct, setSingleProduct }}>{children}</Context.Provider>
    )
}