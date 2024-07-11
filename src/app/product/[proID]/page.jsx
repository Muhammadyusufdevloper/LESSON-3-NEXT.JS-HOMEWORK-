import SingleWrapper from '@/components/single-rout/SingleWrapper'
import React from 'react'

const SingleRout = ({ params }) => {
    let { proID } = params
    return (
        <>
            <section>
                <div className='w-full max-w-6xl px-16 mx-auto'>
                    <SingleWrapper id={proID} />
                </div>
            </section>
        </>
    )
}

export default SingleRout