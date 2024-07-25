import { Outlet, Link } from "react-router-dom";
import Menu from "../components/menu/menu";

const Layout = () => {
    return (
        <>
            <aside className="w-64">
                <Menu />
            </aside>
            <Outlet />
        </>
    )
}

export default Layout;