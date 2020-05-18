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

**여기까지는 React에 대한 WebPack만 다운 받은 거지 SPA로 개발하기에는 안된다.**
**또한 React는 Router를 별도로 지원하지않기때문에 라이브러리를 따로 다운을 받아야한다.**

#### 2. SPA를 위한 Router 설치
```npm
yarn add react-router-dom
npm install --save react-router-dom
```



**왜 프론트에서 Router를 걸까?** <br>
**1. 주소에 따라서 다른 view를 보여주기 위해서** <br>
**2. 페이지가 하나로 다양한 개발을 하기 위해서 ** <br>
