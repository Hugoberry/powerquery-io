---
title: Html.Table
---

# Html.Table


## Description

對照提供的 HTML，傳回包含執行指定 CSS 選取器結果的資料表。


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

傳回資料表，其中包含對提供的 <code>html</code> 執行指定 CSS 選取器的結果。提供選擇性記錄參數 <code>options</code> 可指定額外屬性。記錄可包含下列欄位:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
從範例 html 文字值傳回資料表。
```powerquery
Html.Table("<div class=""name"">Jo</div><span>經理</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
從 html 文字值範例擷取所有 href。
```powerquery
Html.Table("<a href=""/test.html"">測試</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
存取資料
