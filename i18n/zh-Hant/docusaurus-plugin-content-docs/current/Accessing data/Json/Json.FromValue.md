---
title: Json.FromValue
---

# Json.FromValue


產生指定值的 JSON 表示法。


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

使用 <code>encoding</code> 所指定的文字編碼來產生指定值 <code>value</code> 的 JSON 表示法。如果省略 <code>encoding</code>，則會使用 UTF8。值的表示方式如下:<br /> <ul>        <li>Null，文字和邏輯值會以對應的 JSON 類型表示</li>        <li>數字會以 JSON 中的數字表示，但 <code>#infinity</code>、<code>-#infinity</code> 和 <code>#nan</code> 會轉換為 null</li>        <li>清單會以 JSON 陣列表示</li>        <li>記錄會以 JSON 物件表示</li>        <li>資料表會以物件的陣列表示</li>        <li>日期、時間、日期時間、datetimezone 和持續時間會以 ISO-8601 文字表示</li>        <li>二進位值會以 Base-64 編碼的文字表示</li>        <li>類型和函數會產生錯誤</li> </ul>    


## Examples

### Example #1 
將複雜值轉換為 JSON。
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
