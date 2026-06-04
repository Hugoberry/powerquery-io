---
title: Percentage.From
---

# Percentage.From


傳回指定值的百分比值。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

從指定的 `value` 傳回 `percentage` 值。若指定的 `value` 是 `null`，則 `Percentage.From` 會傳回 `null`。若指定的 `value` 是具有尾端百分比符號的 `text`，則會傳回已轉換的十進位數字。否則會使用 `Number.FromText` 將該值轉換成 `number`。也可能會提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 `"12.3%"` 的`百分比`值。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
