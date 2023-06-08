import React from 'react'
import Footer from '../Footer'

export default function ProjectLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}
