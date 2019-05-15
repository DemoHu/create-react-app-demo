import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '@/views/Home/Home';
import ApiDoc from '@/views/ApiDoc/ApiDoc';
import SdkDownload from '@/views/SdkDownload/SdkDownload';
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout;
export default class LayoutBox extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="layout_box">
        <Layout>
          <Header>Header</Header>
          <Content>
            <div className="main">
              <Switch>
                <Redirect exact to="/home" from="/" />
                <Route path="/home" component={ Home }></Route>
                <Route path="/api_doc" component={ ApiDoc }></Route>
                <Route path="sdk_download" component={ SdkDownload }></Route>
              </Switch>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}
