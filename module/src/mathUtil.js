const PI = 3.14;
const getCircleArea = (r) => r * r * PI;
const getSquareArea = (d) => d * d;

// commonJS 표준 - 내보내기
module.exports = {
  PI,
  getCircleArea,
  getSquareArea,
};

// exports를 사용해서 개별적으로 내보내기도 가능
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

// 내보내기 기능을 사용할 때 위의 2가지 방법 중 하나만 일관적으로 사용할 것.
// 혼용해서 사용할 경우 데이터가 유실되는 경우가 있음

// esm 표준 - 내보내기
// export { PI, getCircleArea };
