---
title: Value.FromText
---

# Value.FromText


根據文字表示建立強型別值。


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

從文字表示法 <code>text</code> 解碼值，並將其解譯為具有適當類型的值。    <code>Value.FromText</code> 接受文字值，並會傳回數字、邏輯值、null 值、日期時間值、持續時間值或文字值。空白的文字值會解譯為 null 值。    也可提供選用的 <code>culture</code> (例如 "en-US")。



## Category
Text.Conversions from and to text
