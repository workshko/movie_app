import React from "react";
import PropTypes from "prop-types";

//this.setState 를 호출 할 때마다, React는 render() 함수를 호출한다! << 반드시 기억!!
class App extends React.Component{

  constructor(props){
    super(props);
    console.log("생성자");
  }

  state = {
    count: 0
  };

  add = () => {
    console.log("Add");
    this.setState( current => ( { count : current.count + 1}));
  };

  minus = () => {
    console.log("minus");
    this.setState( current => ( { count : current.count - 1}));
  };

  componentDidMount(){
    console.log("컴포넌트가 렌더링 됬다.");
  }

  componentDidUpdate(){
    console.log("컴포넌트가 업데이트 됬다.");
  }

  componentWillUnmount(){
    console.log("다른 페이지로 가기 전 호출된다!");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The numver is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )

  }

}

export default App;
