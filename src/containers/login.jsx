import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchAuth } from '../store/actions';

import { Form, Icon, Input, Button } from 'antd';
import '../../node_modules/antd/lib/form/style/index.css';
import '../../node_modules/antd/lib/input/style/index.css';
import '../../node_modules/antd/lib/button/style/index.css';
import '../scss/libraries/_form.scss';
import '../scss/libraries/_button.scss';

import '../scss/widgets/_outer-page.scss';

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, credentials) => {
      if (!err) {
        this.props.submit(credentials);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
};

const LoginWrapper = Form.create({ name: 'login' })(LoginForm);

class Login extends Component {
  submit = credentials => {
    this.props.fetchAuth(credentials);
  };

  render() {
    return (
      <div className="app__login outer-page">
        <LoginWrapper submit={ this.submit } />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchAuth: (credentials) => dispatch(fetchAuth(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
