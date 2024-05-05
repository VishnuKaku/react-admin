import React, { useState } from 'react'

const TestMap = () => {

    const [products,setProducts] = useState([
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ]);

      const remove = (id)=>{
            setProducts(products.filter(e=>e.id!==id));
      }

  return (
    <>
        {products.map((obj)=>{
            return(
            <li key={obj.id} style={{color: obj.isFruit?'blue':'green'}}>
                {obj.title}
                <button style={{color:'Red'}} onClick={()=>remove(obj.id)}>Delete</button>
            </li>)
        })}
    </>
  )
}

export default TestMap