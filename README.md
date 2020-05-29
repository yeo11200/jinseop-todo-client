Create React Web(todo-list-client)

#### 0. Download yarn
```npm
npm install -g yarn
```

#### 1. React FrameWork Webpack DownLoad
```npm
yarn add create-react-app

create-react-app ProjectName
```

> **여기까지는 React에 대한 WebPack만 다운 받은 거지 SPA로 개발하기에는 안된다.** <br>
> **또한 React는 Router를 별도로 지원하지않기때문에 라이브러리를 따로 다운을 받아야한다.** <br>

#### 2. SPA를 위한 Router 설치
```npm
yarn add react-router-dom or 
npm install --save react-router-dom
```



> **왜 프론트에서 Router를 걸까?** <br>
> **1. 주소에 따라서 다른 view를 보여주기 위해서** <br>
> **2. 페이지가 하나로 다양한 개발을 하기 위해서** <br>

#### 3. ajax를 처리 하기위한 npm 설치
```npm
yarn add axios
or
npm install --save axios
```

#### 4. class component 자동
React, React-native, 자동으로 생성가능
```js
rcc + control + space

import React, { Component } from 'react'
export default class aaa extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

```

#### 5. react class conponent life cycle
##### 1) constructor : conponent가 실행되자마자 바로실행할 함수
> constructor 안에 super은 부모의 컴포넌트의 값을 가지고 오는데 사용
```js
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
```
