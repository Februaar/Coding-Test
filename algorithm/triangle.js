function solution(a, b, c) {
  let answer = "Yes";

  let sum = a + b + c;
  let max;

  if (a > b && a > c) {
    max = a;
  } else if (b > c) {
    max = b;
  } else {
    max = c;
  }

  if (sum - max <= max || sum - max > c) {
    answer = "No";
  }

  return answer;
}
