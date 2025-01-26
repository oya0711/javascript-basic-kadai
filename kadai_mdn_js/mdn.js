function getTodayDate() {
    const today = new Date(); // 現在の日付と時刻を取得
    const year = today.getFullYear(); // 年を取得
    let month = today.getMonth() + 1; // 月を取得（0始まりなので+1）
    const date = today.getDate(); // 日を取得

    //月が一桁の時に０をつける
    if (month < 10) {
      month = '0' + month;
  }
  
  
    // フォーマットを整えて返す
    return `${year}年${month}月${date}日`;
  }
  
  // 関数を呼び出して今日の日付を出力
  console.log(getTodayDate());
  