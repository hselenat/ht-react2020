/*
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-07-26 16:38:44
 * @LastEditors: hselenat
 * @LastEditTime: 2020-07-26 20:31:07
 * @example: 调用示例
 */ 

import React, { Component } from 'react'
import Button from 'antd/es/button'
import "antd/dist/antd.css"
import IndexPage from "./pages/IndexPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage />
        <Button type="primary">annie</Button>
      </div>
    )
  }
}
export default App