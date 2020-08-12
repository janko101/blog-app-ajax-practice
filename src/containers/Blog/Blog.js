import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: false,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post" exact>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h2>You have to log in to create a new post!</h2>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
