import React from "react";
import axios from 'axios';
import './login.css'
import heart from '../../img/el_heart.svg'
import bar from '../../img/bar.svg'
import left from '../../img/left.svg'
import right from '../../img/right.svg'
import login from '../../img/login.svg'

function Login(){
    let data = {
        userid : ''
        ,userPassWord : ''
    }


    const handleInputId = (e) => {
        data.userid = e.target.value;
    }

    function handleInputPw(e) {
        data.userPassWord = e.target.value;
    }

    return(
        <>
        <div className="back_img">
            <div className='items'>
                <div className="glassbox">
                    <div className='logintext'>
                        <div className='title'>LOGIN</div>
                        <div className='text'>이메일</div>
                        <input type={'email'} className='emailbox' onChange={handleInputId}></input>
                        <div className='text'>비밀번호</div>
                        <input type={'password'} className='passwordbox' onChange={handleInputPw}></input>
                    </div>
                </div>
            </div>
            <div className='musicbox'>
                <div className='column'>
                    <div className='musicbox'>
                        <div className='column'>
                        <div className='version'>v.00.1</div>
                        <div className='welcome' alt="">WELCOME TO PLURA</div>
                        </div>
                        <img className='img' src={heart}></img>
                    </div>
                    <div className='musicbar'>
                        <img src={bar}></img>
                    </div>
                    <div className='row'>
                        <img src={left}></img>

                        <img className='btn' src={login} onClick={()=>{
                            axios.post( '/memberLogin',
                                {
                                    MEM_ID: data.userid
                                    , MEM_PW : data.userPassWord
                                },
                                {
                                    headers:{
                                        // 'Content-type': 'application/json',
                                        // 'Accept': 'application/json',
                                        contentType: 'application/json'
                                    }
                                }
                            )
                            .then((response) => {
                                console.log(response.data);
                                if(response.data.result != null){
                                    alert("로그인 성공!");
                                }
                                else {
                                    alert("로그인 실패");
                                }
                            })
                            .catch((response) => { console.log('Error!') });
                            //alert('비밀번호가 정확하지 않습니다 다시 시도해주세요')
                        }}></img>
                        <img src={right}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login