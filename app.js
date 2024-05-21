// #2.2
// javascript의 naming rool은 camelCase
// ex) veryLongVariableName

// #2.3
// javascript의 변수 만드는 두 가지 방법
// 1. const 변수명 -> constant의 축약어로, 한 번 변수를 생성하면 그 값을 변경할 수 없다.
// 2. let 변수명 -> 선언한 변수의 값을 변경할 수 있다.
// 이로써 각각의 변수에 따라, 작성자의 의도를 파악할 수 있다.
// javascript는 업데이트를 하는 게 아니라, 패치를 한다.(과거에 만들어진 웹사이트가 동작을 못 할 수 있기에, 업데이트를 안 한다.)
// 과거에 변수를 만들었을 때는 var을 사용했다.
// 변수 생성 방법을 정리하면, default는 const를 쓰고, 필요할 때만 let을 쓰고, var은 쓰지 않는다.

const a = 5;

console.log(5+a);
console.log(5/2);