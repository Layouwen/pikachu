const string = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #ffe600;
  min-height: 100vh;
}

.skin {
  position: relative;
}

.nose {
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  z-index: 10;
}

@keyframes wave {
  0% {
      transform: rotate(0deg);
  }

  33% {
      transform: rotate(5deg);
  }

  66% {
      transform: rotate(-5deg);
  }

  100% {
      transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

.yuan {
  position: absolute;
  top: -16px;
  left: -10px;
  width: 20px;
  height: 6px;
  border-radius: 10px 10px 0 0;
  background: black;
}

.eye {
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #000;
  background: #2e2e2e;
}

.eye::before {
  content: '';
  display: block;
  position: relative;
  left: 4px;
  top: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #000;
  background: #fff;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
  width: 200px;
  height: 200px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip {
  position: absolute;
  left: 50%;
  margin-left: -50px;
  height: 30px;
  width: 100px;
  border: 3px solid black;
  background: #ffe600;
  border-top-color: transparent;
  border-right-color: transparent;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0px;
  transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 7px;
  height: 30px;
  background: #ffe600;
}

.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .yuan1 {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  width: 150px;
  height: 1000px;
  border: 3px solid black;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  height: 300px;
  background: #ff485f;
  border-radius: 100px;
}

.face {
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -44px;
  width: 88px;
  height: 88px;
  border: 3px solid black;
  z-index: 3;
}

.face>img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}

.face.left>img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}

.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
`
export default string