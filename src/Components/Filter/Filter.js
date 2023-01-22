import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
    return (
        <div className='grid grid-cols-10 justify-between gap-3 my-5 mx-5 md:mx-16'>
            <div className='col-span-10 md:col-span-5'>
                <input type="text" placeholder='Search ai tools from over 100+ ai tools gallery.' className="input input-bordered input-accent w-full" />
            </div>
            <div className='col-span-6 md:col-span-4'>
                <select className="select select-accent w-full">
                    <option disabled selected>Select your niche category</option>
                    <option>Art</option>
                    <option>Education</option>
                    <option>Science</option>
                </select>
            </div>
            <div className='col-span-4 md:col-span-1 flex justify-end'>
                <button className='btn btn-accent btn-active justify-items-end'><BsSearch className='text-xl mr-2'></BsSearch>Search</button>
            </div>  
        </div>
    );
};

export default Filter;