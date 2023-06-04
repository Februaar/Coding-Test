function solution(a, b, c) {
  let answer = "";

  let sum = a + b + c;
  let max;

  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else {
    max = c;
  }

  if (sum - max > max && sum - max <= c) {
    answer = "Yes";
  } else {
    answer = "No";
  }

  return answer;
}
