// 変数numに1以上の正の数を代入
let num = 15; // 任意の正の数

// 条件分岐
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num); // それ以外の場合は変数numの値を出力
}
