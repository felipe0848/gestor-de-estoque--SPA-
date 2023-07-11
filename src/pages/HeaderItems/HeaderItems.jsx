import { Link, Outlet, useLocation, useMatch } from "react-router-dom";

import "./HeaderItems.css";

export default function HeaderItems() {
  const { pathname } = useLocation()


  return (
    <>
      <div className="container">
        <h2>Stock Items</h2>
        <div className="navItems">
          <Link
            to={"/items"}
            className={pathname === "/items" ? "selected" : ""}
            id="allItems"
          >
            Todos os items
          </Link>
          <Link
            to={"/items/new-item/"}
            className={pathname === "/items/new-item/" ? "selected" : ""}
            id="newItem"
          >
            Novo item
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
