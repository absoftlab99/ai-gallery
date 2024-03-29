import React from 'react';
import { BsPatchCheckFill, BsBookmarkHeartFill, BsAwardFill, BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4 my-8 px-5 md:mx-16'>
                <div className='col-span-12 md:col-span:6 lg:col-span-4'>
                    <div className="card card-bordered w-full bg-base-100 shadow-xl justify-center">
                        <figure><img className='img' src="https://etimg.etb2bimg.com/thumb/msid-98506949,imgsize-71224,width-1200,height=765,overlay-etbrandequity/digital/from-marketing-to-design-brands-adopt-ai-tools-despite-risk.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="">
                                    <h2 className="card-title text-2xl">
                                        Adcreative.ai
                                        <div className=""><BsPatchCheckFill className='text-accent ml-2'></BsPatchCheckFill></div>
                                    </h2>
                                </div>
                                <div className=''>
                                    <div className="btn btn-sm btn-ghost"><BsBookmarkHeartFill className='mr-2 text-xl'></BsBookmarkHeartFill> 233</div>
                                </div>
                            </div>
                            <p className='text-justify my-2'>Generate conversion focused ad and social media post creatives in a matter of seconds. Get better results</p>
                            <button className="btn btn-sm btn-outline w-36 my-2"><BsAwardFill className='mr-2'></BsAwardFill>Free Trail</button>
                            <div className="card-actions justify-start">
                                <Link className="btn-link text-accent">#copywriting</Link>
                                <Link className="btn-link text-accent">#social media assistant</Link>
                            </div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <button className="btn btn-sm btn-active btn-accent col-span gap-1-1"><BsBoxArrowInUpRight className='text-xl'></BsBoxArrowInUpRight></button>
                                <button className="btn btn-sm btn-outline btn-accent col-span-1"><BsBookmarkHeartFill className='text-xl'></BsBookmarkHeartFill></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span:6 lg:col-span-4'>
                    <div className="card card-bordered w-full bg-base-100 shadow-xl justify-center">
                        <figure><img className='img' src="https://etimg.etb2bimg.com/thumb/msid-98506949,imgsize-71224,width-1200,height=765,overlay-etbrandequity/digital/from-marketing-to-design-brands-adopt-ai-tools-despite-risk.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="">
                                    <h2 className="card-title text-2xl">
                                        Adcreative.ai
                                        <div className=""><BsPatchCheckFill className='text-accent ml-2'></BsPatchCheckFill></div>
                                    </h2>
                                </div>
                                <div className=''>
                                    <div className="btn btn-sm btn-ghost"><BsBookmarkHeartFill className='mr-2 text-xl'></BsBookmarkHeartFill> 233</div>
                                </div>
                            </div>
                            <p className='text-justify my-2'>Generate conversion focused ad and social media post creatives in a matter of seconds. Get better results</p>
                            <button className="btn btn-sm btn-outline w-36 my-2"><BsAwardFill className='mr-2'></BsAwardFill>Free Trail</button>
                            <div className="card-actions justify-start">
                                <Link className="btn-link text-accent">#copywriting</Link>
                                <Link className="btn-link text-accent">#social media assistant</Link>
                            </div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <button className="btn btn-sm btn-active btn-accent col-span gap-1-1"><BsBoxArrowInUpRight className='text-xl'></BsBoxArrowInUpRight></button>
                                <button className="btn btn-sm btn-outline btn-accent col-span-1"><BsBookmarkHeartFill className='text-xl'></BsBookmarkHeartFill></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className="card card-bordered w-full bg-base-100 shadow-xl justify-center">
                        <figure><img className='img' src="https://etimg.etb2bimg.com/thumb/msid-98506949,imgsize-71224,width-1200,height=765,overlay-etbrandequity/digital/from-marketing-to-design-brands-adopt-ai-tools-despite-risk.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="">
                                    <h2 className="card-title text-2xl">
                                        Adcreative.ai
                                        <div className=""><BsPatchCheckFill className='text-accent ml-2'></BsPatchCheckFill></div>
                                    </h2>
                                </div>
                                <div className=''>
                                    <div className="btn btn-sm btn-ghost"><BsBookmarkHeartFill className='mr-2 text-xl'></BsBookmarkHeartFill> 233</div>
                                </div>
                            </div>
                            <p className='text-justify my-2'>Generate conversion focused ad and social media post creatives in a matter of seconds. Get better results</p>
                            <button className="btn btn-sm btn-outline w-36 my-2"><BsAwardFill className='mr-2'></BsAwardFill>Free Trail</button>
                            <div className="card-actions justify-start">
                                <Link className="btn-link text-accent">#copywriting</Link>
                                <Link className="btn-link text-accent">#social media assistant</Link>
                            </div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <button className="btn btn-sm btn-active btn-accent col-span gap-1-1"><BsBoxArrowInUpRight className='text-xl'></BsBoxArrowInUpRight></button>
                                <button className="btn btn-sm btn-outline btn-accent col-span-1"><BsBookmarkHeartFill className='text-xl'></BsBookmarkHeartFill></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;