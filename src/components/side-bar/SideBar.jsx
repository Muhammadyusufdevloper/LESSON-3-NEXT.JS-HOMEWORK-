"use client"
import React from "react";
import "./SideBar.scss";
import productImg from "../../assets/admin/product.svg";
import userImg from "../../assets/admin/users.svg";
import modeImg from "../../assets/admin/mode.svg";
import logoutImg from "../../assets/admin/logout.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ menu }) => {
    let navigate = useRouter();
    function hanelLogout() {
        localShrefrage.clear();
        navigate.push("/");
    }
    let location = usePathname()
    console.log(location);
    return (
        <>
            <div className={`sayidbar ${menu ? "sayidbar__show" : ""}`}>
                <ul className="sayidbar__list">
                    <li className="sayidbar__item">
                        <Link className={`sayidbar__link ${location === "/admin/manage-product" ? "sayidbar__active" : ""}`} href={"/admin/manage-product"}>
                            <Image src={productImg} alt="Product img" />
                            <p>Products</p>
                        </Link>
                    </li>
                    <li className="sayidbar__item">
                        <Link className={`sayidbar__link ${location === "/admin/create-product" ? "sayidbar__active" : ""}`} href={"/admin/create-product"}>
                            <Image src={userImg} alt="user img" />
                            <p>Create product</p>
                        </Link>
                    </li>
                    <li className="sayidbar__item">
                        <Link className={`sayidbar__link ${location === "/admin/manage-category" ? "sayidbar__active" : ""}`} href={"/admin/manage-category"}>
                            <Image src={productImg} alt="Product img" />
                            <p>Category</p>
                        </Link>
                    </li>
                    <li className="sayidbar__item">
                        <Link className={`sayidbar__link ${location === "/admin/create-category" ? "sayidbar__active" : ""}`} href={"/admin/create-category"}>
                            <Image src={userImg} alt="user img" />
                            <p>Create category</p>
                        </Link>
                    </li>
                </ul>
                <div className="sayidbar__btns">
                    <button className="sayidbar__modal">
                        <Image src={modeImg} alt="Modal img" />
                        <p>Change mode</p>
                    </button>
                    <button onClick={hanelLogout} className="sayidbar__logout">
                        <Image src={logoutImg} alt="Logout img" />
                        <p>Logout</p>
                    </button>
                </div>
            </div >
        </>
    );
};

export default Sidebar;
