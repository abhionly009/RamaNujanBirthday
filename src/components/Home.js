import React from 'react'
import Product from './Product'
import data from '../data.json'
import CardView from './CardView'

function Home() {
  return (
    <div style={{    display: 'flex',
        flexFlow: 'row nowrap',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        flexDirection: 'row'}}>
        {
            data.map(item=>{
                return(
                    <CardView data={item}/>

                )

            })
        }
    </div>
  )
}

export default Home