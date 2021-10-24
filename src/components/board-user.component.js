import React, { useState } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default function BoardUser(props) {
  const [content, setContent] = useState("");

    UserService.getUserBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
    
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
}
