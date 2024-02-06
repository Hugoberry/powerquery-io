---
title: Html.Table
---

# Html.Table


指定された HTML に対して指定された CSS セレクターを実行した結果を含むテーブルを返します。


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

提供された <code>html</code> に対して指定された CSS セレクターを実行した結果を含むテーブルを返します。省略可能なレコード パラメーター <code>options</code> が追加のプロパティを指定するために提供されることがあります。レコードには、次のフィールドを含めることができます。    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
サンプルの html テキスト値からテーブルを返します。
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
サンプルの html テキスト値からすべての href を抽出します。
```powerquery
Html.Table("<a href=""/test.html"">テスト</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
データにアクセスしています
