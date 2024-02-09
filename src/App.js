/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
  let post="강남 맛집";
  let[글제목,글제목변경]= useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  let[따봉,따봉변경]=useState(0);

  return (
    <div className="App">
      <div className="black-nave"><h4>블로그임</h4></div>
      <h4 id={post} style={{color : 'red',fontSize :'50px'}}>{post}</h4>
      <div className="list">
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0]='여자코트 추천';
          글제목변경(copy);   
        }}>글수정</button>
        <h4>글제목</h4>
        <p>2월 17일</p>
      </div>
      <div className="list">
        <h4>{글제목[0]}<span id="엄지척" onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>2월 27일</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 27일</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 27일</p>
      </div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </div>
    
  );
}

export default App;
