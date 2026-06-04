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

從文字表示法解碼值，並將其解譯為具有適當類型的值。

-   `text`: 要解譯的文字。
-   `culture`: (選用) 用來解譯文字的特定文化特性 (例如 "en-US")。

此函式會接受文字值，並傳回類型 `number`、`logical`、`null`、`datetime`、`duration` 或 `text` 的值。空白的文字值將解譯為 `null` 值。


## Examples

### Example #1
將代表數字的文字轉換為其對應的數值。
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
將代表百分比的文字轉換為其對應的數值。
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
將代表法國歐元值的文字轉換為其對應的數值。
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
將代表德國日期和時間的文字轉換為其對應的日期和時間值。
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
