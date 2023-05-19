import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='py-6 text-center safe-x-padding'>
                <p className='text-xl font-medium lg:text-2xl'>©{new Date().getFullYear()} Deri Kurniawan All rights reserved.</p>
            </div>
        </footer>
    )
}
