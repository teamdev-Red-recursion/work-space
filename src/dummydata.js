// dummyのデータです。DB接続前のテストに使用

const dummyDataObj = {
  "articles":
    [
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" },
      { "title": "title", "text": "this is text", "date": "2023-03-25T00:00:00.000Z" }
    ]
}

// console.log(dummyDataObj.articles);
dummyDataObj.articles.forEach((el, i) => {
  console.log(i + "番目のデータ:");
  console.log(el.title);
  console.log(el.text);
  console.log(el.data);
  console.log();
})
