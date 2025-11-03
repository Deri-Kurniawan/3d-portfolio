import React from 'react'
import Footer from '@components/Footer'

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
