import React from "react";
import mealsImg from '../../../assets/meals.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Jamil Chows</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}><img src={mealsImg}/></div>
    </>
  );
};

export default Header;
