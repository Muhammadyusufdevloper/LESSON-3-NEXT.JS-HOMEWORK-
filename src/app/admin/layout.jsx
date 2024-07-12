import React from 'react'
import "../globals.css"
import SideBar from '@/components/side-bar/SideBar'
import AdminHeader from '@/components/admin-header/AdminHeader'
const LayoutAdmin = ({ children }) => {
    return (
        <>
            <AdminHeader />
            <main className='admin'>
                <SideBar />
                {children}
            </main>
        </>
    )
}

export default LayoutAdmin