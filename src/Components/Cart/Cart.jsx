import React, { useEffect, useState } from 'react'
import axios from 'axios';
import From from '../From/From';

const Cart = () => {

  const [show, setShow] = useState(false);
  const [cartData, setCartdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = cartData.slice(firstIndex, lastIndex);
  const numberPage = Math.ceil(cartData.length / recordPerPage);
  const numbers = [...Array(numberPage + 1).keys()].slice(1)

  useEffect (() => {
    const getAllcart = async () => {

      await axios.get('http://localhost:3000/api/cart/getAllcart/')
        .then((data) => (setCartdata(data.data)))
    }
    getAllcart()


  }, [cartData])


  const changePage = (id) => {
    setCurrentPage(id)
  }


  const pevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }



  return (
    <div className='cart bg-green-500 py-[50px]'>
      <div className='container'>
        <div className='row text-center my-10'>
          <a className='bg-yellow-500 px-10 py-4 cursor-pointer' onClick={()=>setShow(!show)}>Add Blog</a>
          {
            show ? <From/> : ''
          }
        </div>
        <div className="row flex flex-wrap justify-center">

          {
            records.map((items) => {
              return <>
                <div className="cart h-96 w-[300px] bg-red-500 p-10 mb-5 ml-5">
                  <h3 className='text-center'>{items.title}</h3>
                  <p>{items.description}</p>
                </div>
              </>
            })

          }
          
        </div>
        <div className='pagination-area '>
            <ul className='pagination flex gap-5 justify-center'>
              <li className='pagination-item cursor-pointer' onClick={pevPage}><a className=''>Prev</a></li>
              {
                numbers.map((nmbr,i) => {
                  return <>
                    <li key={i} className={`cursor-pointer ${currentPage === nmbr ? 'active' : ''}`}>
                      <a onClick={() => changePage(nmbr)}>{nmbr}</a>
                    </li>
                  </>
                })

              }
              <li className='pagination-item cursor-pointer' onClick={nextPage}><a className=''>Next</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Cart
