import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>액션 디스패치 테스트</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  //왼쪽이 props, 오른쪽이 store의 state
  user: state.user
})

const mapActionToProps = (dispatch) => ({
  //왼쪽은 props, 오른쪽이 (액션을 디스패치하는) 펑션
  updateUser: (name) => dispatch(updateUser(name))
})

//HoC : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규컴포넌트를 리턴하는 펑션
//커링 펑션: 입력파라메터를 한꺼번에 넣는것이 아니라 차례대로 넣는 것.
export default connect(mapStateToProps, mapActionToProps)(App);

