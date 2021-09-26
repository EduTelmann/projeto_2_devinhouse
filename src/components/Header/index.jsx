import React from "react";

const Header = ({title}) => {
    return (
        <header className="main-header">
            <p>{title}</p>
        </header>
    );
};

export default Header;