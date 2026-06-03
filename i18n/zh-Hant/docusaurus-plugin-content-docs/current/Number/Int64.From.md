---
title: Int64.From
---

# Int64.From


從給定的值建立 64 位元整數。


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

從指定的 `value` 傳回 64 位元整數 `number` 值。若指定的 `value` 是 `null`，則 `Int64.From` 會傳回 `null`。若指定的 `value` 是位於 64 位元整數範圍內且無任何小數點位數部分的 `number`，則會傳回 `value`。若有小數點位數部分，則會使用指定的四捨五入模式模式將該數字四捨五入。預設的四捨五入模式為 `RoundingMode.ToEven`。若指定的 `value` 是任何其他類型，則會先使用 `Number.FromText` 將其轉換成 `number`。如需可用的四捨五入模式，請參閱 `Number.Round`。也可能會提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 `"4"` 的 64 位元整數 `number` 值。
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
使用 `RoundingMode.AwayFromZero` 取得 64 位元整數的 `number` 值 `"4.5"`。
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
