import { Outlet, Link } from "react-router-dom";
import Menu from "../components/menu/menu";

const Layout = () => {
    return (
        <div className="flex">
            <Menu className=" bg-gray-100 " />
            <aside />
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;