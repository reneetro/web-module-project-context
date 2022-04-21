// 1 decide what data to teleport
// 2 pull in the create context helper
// 3 instantiate a context (and export it)
// 4 export default a provider
// 5 go to the top of the tree and USE the provider
//6 find a component that wants to consume the data

import React, { createContext } from 'react'

const products = 
     [
        {
            id: 1,
            title: 'The Art Of War',
            price: 10.11,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Civilization and Its Discontents',
            price: 14.29,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/51Jj12iMZnL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'Influence: The Psychology of Persuasion',
            price: 10.98,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Grokking Algorithms',
            price: 40.00,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/61uUPXbhMxL._SX397_BO1,204,203,200_.jpg'
        }
    ];
    


// this is used inside the component that want to consume context
export const ProductContext = createContext()

// this is used to wrap the part of the tree that wants the data
export default function ProductProvider(props) {
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  )
}
