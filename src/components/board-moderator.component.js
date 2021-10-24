import React from "react";
import userService from "../services/user.service";

export default function BoardModerator(props) {
  const content = userService.getModeratorBoard()

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
}
