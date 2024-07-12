"use client"
import React from "react";
import "./AdminHeader.scss";
import menuImg from "../../assets/admin/menu.svg";
import jonesImg from "../../assets/admin/photo.svg";
import adminImg from "../../assets/admin/Logo.svg";
import Link from "next/link";
import Image from "next/image";

const AdminHeader = ({ setMenu, menu }) => {
    return (
        <>
            <div className="admin-navbar">
                <Link
                    className={`admin-navbar__logo ${menu ? "admin-navbar__logo__show" : ""}`}
                    href={"/"}
                >
                    <Image src={adminImg} alt="admin logo" />
                    <p>Dashboard</p>
                </Link>
                <div className="admin-navbar__right">
                    <button
                        onClick={() => setMenu((prev) => !prev)}
                        className="admin-navbar__menu"
                    >
                        <Image src={menuImg} alt="Menu img" />
                    </button>
                    <div className="admin-navbar__accout">
                        <p>Jones Ferdinand</p>
                        <Image src={jonesImg} alt="Jone img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHeader;
