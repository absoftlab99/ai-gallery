import React from 'react';
import { IoMdPaperPlane } from "react-icons/io";
import Multiselect from 'multiselect-react-dropdown';


const AddAi = () => {
    return (
        <div className="hero min-h-screen w-100" style={{ backgroundImage: `url("https://i.ibb.co/8YYjxp5/istock-1200937823.jpg")` }}>
            <div className="hero-overlay"></div>
            <div className="hero">
                <div className="">
                    <div className="card shadow-2xl w-100 bg-base-100 bg-opacity-90">
                        <div className="card-body">
                            <h1 className='text-4xl mb-3'>Submit a Ai Tool</h1>
                            <div className='flex gap-4'>
                                <div className="form-control w-100">
                                    <input type="text" placeholder="Tool Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Web Link" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
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