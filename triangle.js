function solution(a, b, c) {
  let answer = "";

  let sum = a + b + c;
  let max = Math.max(a, b, c);

  if (sum - max > max && sum - max <= c) {
    answer = "Yes";
  } else {
    answer = "No";
  }

  return answer;
}
