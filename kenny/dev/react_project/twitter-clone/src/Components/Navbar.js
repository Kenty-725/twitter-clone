import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faFilePen,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ isAuth }) {
  return (
    <div>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          ホーム
        </Link>
        {!isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link>
        ) : (
          <>
            <Link to="/createpost">
              <FontAwesomeIcon icon={faFilePen} />
              記事投稿
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faRightFromBracket} />
              ログアウト
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
