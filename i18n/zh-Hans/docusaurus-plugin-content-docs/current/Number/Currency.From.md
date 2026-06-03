---
title: Currency.From
---

# Currency.From


从给定值中返回一个货币值。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

从给定的 `value` 返回 `currency` 值。如果给定的 `value` 为 `null`，则 `Currency.From` 将返回 `null`。如果给定的 `value` 是货币范围内的 `number`，则将 `value` 的小数部分舍入为 4 位小数位数后返回。如果 `value` 属于任何其他类型，则首先使用 `Number.FromText` 将其转换为 `number`。货币的有效范围为 `-922,337,203,685,477.5808` 到 `922,337,203,685,477.5807`。要了解可用的舍入模式，请参阅 `Number.Round`。默认为 `RoundingMode.ToEven`。还可能提供可选的 `culture` (例如 “en-US”)。


## Examples

### Example #1
获取 `"1.23455"` 的 `currency` 值。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
使用 `RoundingMode.Down` 获取 `"1.23455"` 的 `currency` 值。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
