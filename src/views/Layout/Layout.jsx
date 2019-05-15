import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout;

const Home = React.lazy(() => import('@/views/Home/Home'))
const ApiDoc = React.lazy(() => import('@/views/ApiDoc/ApiDoc'))
const SdkDownload = React.lazy(() => import('@/views/SdkDownload/SdkDownload'))
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
              <React.Suspense fallback={<div>loading...</div>}>
                <Switch>
                  <Redirect exact to="/home" from="/" />
                  <Route path="/home" component={ Home }></Route>
                  <Route path="/api_doc" component={ ApiDoc }></Route>
                  <Route path="/sdk_download" component={ SdkDownload }></Route>
                </Switch>
              </React.Suspense>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}
