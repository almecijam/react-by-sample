import * as React from "react"
import {Link} from 'react-router';
import {Header} from './header';
import {Form} from './form'
import {hashHistory} from 'react-router'
import {LoginEntity} from '../../model/login';
import {loginApi} from '../../restApi/login';

interface State {
  loginInfo: LoginEntity;
}

interface Props {

}


export class LoginPage extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {loginInfo: new LoginEntity()};
  }

  performLogin() {
      if(loginApi.isValidLogin(this.state.loginInfo)) {
         hashHistory.push('/pageB');
      }
  }

  updateLoginEntity(loginInfo : LoginEntity) {
    this.setState({loginInfo: loginInfo});
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <Header/>
              <Form loginInfo={this.state.loginInfo}
                    updateLoginInfo={this.updateLoginEntity.bind(this)}
                    performLogin={this.performLogin.bind(this)}
                    />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
