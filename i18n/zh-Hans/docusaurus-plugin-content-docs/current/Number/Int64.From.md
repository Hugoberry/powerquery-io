---
title: Int64.From
---

# Int64.From


根据给定值创建 64 位整数。


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

从给定的 `value` 中返回 64 位整数 `number` 值。如果给定的 `value` 为 `null`，则 `Int64.From` 返回 `null`。如果给定的 `value` 是不带小数部分的 64 位整数范围内的 `number`，则返回 `value`。如果带有小数部分，则按指定舍入模式舍入该数字。默认舍入模式为 `RoundingMode.ToEven`。如果 `value` 属于任何类型，则首先使用 `Number.FromText` 将其转换为 `number`。要了解可用的舍入模式，请参阅 `Number.Round`。还可能提供可选的 `culture` (例如，“en-US”)。


## Examples

### Example #1
获取 64 位整数的`number` 值 `"4"`。
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
使用 `RoundingMode.AwayFromZero` 获取 `"4.5"` 的 64 位整数 `number` 值。
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
