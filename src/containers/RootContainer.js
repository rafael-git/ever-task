import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";
import SignUp from "./SignUp/index";
import SignIn from "./SignIn/index";
import PendingTasks from "./PendingTasks/index";
import CompletedTasks from "./CompletedTasks/index";
import Homepage from "./Homepage/index";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask/index";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { connect, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/user/user.action";

class RootContainer extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />

          <main className="main">
            <Switch>
              <Route
                path="/sign-in"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignIn />
                }
              />
              <Route path="/all" component={AllTasks} />
              <Route path="/pending" component={PendingTasks} />
              <Route path="/completed" component={CompletedTasks} />
              <Route
                path="/sign-up"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignUp />
                }
              />
              <Route path="/crud-task" component={AddTask} />
              <Route path="/" component={Homepage} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
