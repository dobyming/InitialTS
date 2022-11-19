//함수의 파라미터 타입(반환값에도)을 정의하는 방식 
function sum(a: number,b: number): number {
    return a + b;
}

// sum(10,20,30) 이런식으로 작성하면 TS는 오류를 잡는다.
// => JS에서는 허용되지만.. 

//함수의 Optional Parameter
function log(a: string, b?: string) {
} //매개변수 2개 중에 일부만 사용하고 싶을때 syntax '?:' 활용
log('hello world');
log('hello ts','welcome');