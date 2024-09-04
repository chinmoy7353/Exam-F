import axios from 'axios'
import React, { useState } from 'react'

const From = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [show, setShow] = useState(true)

    const handaleSubmit = async () => {
        await axios.post("http://localhost:3000/api/cart/createcart", {
            title: title,
            description: description
        })
        console.log(title)
        console.log(description)
    }
    return (
        <>
            {
                show && <div className='transition duration-50  from-area mb-10 absolute top-0 left-0 w-full h-full bg-[#000000] opacity-90 flex justify-center items-center'>
                <div className='w-96 bg-[#ecf0f1] h-[500px] mx-auto relative'>
                    <div className='row'>
                        <div className="head">
                            <span onClick={()=>setShow(false)} className='absolute bottom-[100%] left-[100%] text-white text-2xl m-4 cursor-pointer'>x</span>
                            <div className='border-box py-4'>
                                <h2 className='text-bold capitalize text-xl'>Upload Your Blog Post</h2>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='flex justify-center flex-col gap-4 p-4'>
                                <input onChange={(e) => setTitle(e.target.value)} placeholder='title here' className='w-full py-2 px-2 outline-none border-2' />
                                <textarea onChange={(e) => setDescription(e.target.value)} placeholder='description here' className='w-full py-2 px-2 outline-none border-2' rows="6"></textarea>
    
                                <span className='text-left mt-6'>
                                    <button className='bg-green-300  px-6 py-2 capitalize' onClick={handaleSubmit}>submit</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default From
