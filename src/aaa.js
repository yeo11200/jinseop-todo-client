import React, { Component } from 'react'
/**
 * 현재 react 자동 컴포넌트 생성
 * 명령어 rcc -> class component 자동
 * Prop : 부모 컴포넌트에서 받을 데이터
 * state : 변화될 데이터
 */
class aaa extends Component {

    /**
     * 생성자 : component가 실행되자마자 실행되는 함수
     * 여기서 props를 받아서 super를 사용하는데
     * 자바에서 super 부모에서 받아온 데이터를 사용할 때 사용한다. 
     */
    constructor(props){
        super(props);

        this.state = {
            number : 0,
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default aaa;