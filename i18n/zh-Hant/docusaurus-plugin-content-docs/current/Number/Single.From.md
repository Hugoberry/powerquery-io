---
title: Single.From
---

# Single.From


根據指定的值建立 Single。


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

從指定的 `value` 傳回 Single `number` 值。若指定的 `value` 是 `null`，則 `Single.From` 會傳回 `null`。若指定的 `value` 是位於 Single 範圍內的 `number`，則會傳回 `value`，否則會傳回錯誤。若指定的 `value` 是任何其他類型，則會先使用 `Number.FromText` 將其轉換成 `number`。也可能會提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 `"1.5"` 的 Single `number` 值。
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
