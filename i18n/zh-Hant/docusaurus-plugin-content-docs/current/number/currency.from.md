---
title: Currency.From
---

# Currency.From


從給定的值傳回貨幣值。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

從指定的 `value` 傳回 `currency` 值。若指定的 `value` 是 `null`，則 `Currency.From` 會傳回 `null`。若指定的 `value` 是貨幣範圍內的 `number`，則會將 `value` 的小數點位數部分四捨五入成 4 個小數位數並傳回。若指定的 `value` 是任何其他類型，則會先使用 `Number.FromText` 將其轉換成 `number`。貨幣的有效範圍是 `-922,337,203,685,477.5808` 到 `922,337,203,685,477.5807`。如需可用的四捨五入模式，請參閱 `Number.Round`。預設為 `RoundingMode.ToEven`。也可能會提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 `"1.23455"` 的 `currency` 值。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
使用 `RoundingMode.Down` 取得 `currency` 值 `"1.23455"`。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
