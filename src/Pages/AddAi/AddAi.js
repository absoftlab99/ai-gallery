import React from 'react';
import { IoMdPaperPlane } from "react-icons/io";


const AddAi = () => {
    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("https://i.ibb.co/8YYjxp5/istock-1200937823.jpg")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-content">
                    <div className="card shadow-2xl w-100 bg-base-300 bg-opacity-90">
                        <div className="card-body">
                            <h1 className='text-4xl mb-3'>Submit a Ai Tool</h1>
                            <div className='md:flex gap-4'>
                                <div className="form-control w-100">
                                    <input type="text" placeholder="Tool Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-4 md:mt-0">
                                    <input type="text" placeholder="Web Link" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <textarea className='textarea textarea-bordered' placeholder='Tool Description'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent"><IoMdPaperPlane className='text-xl mr-2'></IoMdPaperPlane>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAi;