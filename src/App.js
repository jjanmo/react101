import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

//GOAL : make counter

//class component
class App extends React.Component {
    //생성자는 메서드를 바인딩하거나 state를 초기화하는 작업이 없다면 생성자를 구현할 필요없다 
    constructor(props) {
        super(props); //props 초기화
        this.state = {
            count: 0
        }
    }

    //setState()의 updater함수 이용 : setState(updater [, callback]);
    //-> 여러 번의 요청이 일괄처리되는 경우 이를 해결할수있다.
    //-> setState는 말그대로 실행 명령이 아니라 요청이다. 
    //-> 비동기적으로 작동하기 때문에 요청이 가면 응답을 기다린다고 생각할 수 있다. 
    //-> 또한 이 때문에 setState에 의해 값 변경을 요청한 후에 리랜더링이 되지않았다면, 아직 state값은 변경이 되지않은 것이다.
    //-> 하지만, setState의 updater함수안의 state와 props는 항상 최신의 값을 갖고 있다. 그렇기때문에 updater함수를 이용하면
    //-> 여러 번의 요청이 각각 값의 변경이 일어나게 된다.

    //up 메소드를 아래처럼 변경할 수 있다
    up() {
        this.setState(function (state, _) {
            return ++state.count;
        });
    }

    // up() {
    //     this.setState({ count: this.state.count + 1 });
    // }

    down() {
        this.setState({ count: this.state.count - 1 });
    }
    //up down 메소드를 위에처럼 만들면 아래에서 버튼을 클릭할 때 this가 window가 된다
    //-> Web API에서 작동하는 것이기때문에 
    //위에처럼 사용하고 싶다면 밑에서 버튼에 클릭이벤트가 일어날 때, this값을 인위적으로 바인딩해줘야한다
    //만약에 this바인딩을 하고 싶지 않다면, 화살표 함수로 메소드를 생성하면 된다 

    render() {
        const self = this;
        return (
            <div>
                <h1>Counting : {this.state.count}</h1>
                <button onClick={this.up.bind(self)}>Up</button>
                <button onClick={this.down.bind(self)}>Down</button>
            </div>
        );
    }
}

/*
Life Cycle 정리
1) 컴퍼넌트가 호출되면 자동으로 render()가 호출되어서 화면이 출력된다 
-> 컴퍼넌트가 마운트 되었다라고 말하고 이 의미는 DOM트리에 추가되었음을 나타낸다.
2) (현재는 존재하지 않지만,) componentDidMount()는 컴퍼넌트가 마운트된 직후 호출된다.
위에서 말한 것처럼, DOM 트리에 추가된 후 호출되는 것이기 때문에 DOM 노드가 필요한 초기화 작업은 여기서 이루어질수있다
또한 네트워크 작업, 데이터를 받아와서 초기화작업등을 해야한다면 여기서 이루지는 것이 적합하다.
3) 만약에 버튼이 클릭되면 setState()가 호출된다. setState는 state값을 변경하고 내부적으로 변경된 state를 토대로 render()를 호출한다.
즉 자동으로 다시 뷰가 바뀌게 된다. 
4) componentDidUpdate()는 갱신이 일어난 직후 호출된다. 갱신 이후 추가작업이 필요한 경우 이 메서드를 이용하면 좋다.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/

export default App;
