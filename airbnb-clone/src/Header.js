import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
function Header() {
  return (
    <div className="header">
      <img
        src="https://i.dlpng.com/static/png/6759867_preview.png"
        alt="airbnb-logo"
        class="header__icon"
      />
      <div class="header__center">
          <input type="text"/>
          <SearchIcon/>
      </div>
      <div class="header__right">
          <p>Become a Host</p>
          <LanguageIcon/>

          <ExpandMoreIcon/>
          <Avatar/>

      </div>
    </div>
  );
}

export default Header;
