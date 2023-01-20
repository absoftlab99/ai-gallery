import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
    return (
        <div className='mx-16 my-5 grid grid-cols-12 justify-between gap-3'>
            <div className='col-span-7'>
                <input type="text" placeholder='Search ai tools from over 100+ ai tools gallery.' className="input input-bordered input-accent w-full" />
            </div>
            <div className='col-span-3'>
                <select className="select select-accent w-full">
                    <option disabled selected>Select your niche category</option>
                    <option>Art</option>
                    <option>Education</option>
                    <option>Science</option>
                </select>
            </div>
            <div className='col-span-2'>
                <button className='btn btn-accent btn-active'><BsSearch className='text-xl mr-2'></BsSearch>Search</button>
            </div>  
        </div>
    );
};

export default Filter;