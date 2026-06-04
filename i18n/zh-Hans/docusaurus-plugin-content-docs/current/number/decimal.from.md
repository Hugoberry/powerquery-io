---
title: Decimal.From
---

# Decimal.From


从给定的值创建 Decimal。


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 `value` 中返回十进制 `number` 值。如果给定的 `value` 为 `null`，则 `Decimal.From` 返回 `null`。如果给定的 `value` 是在十进制范围内的 `number`，则返回 `value`，否则返回错误。如果 `value` 属于任何其他类型，则将首先使用 `Number.FromText` 将其转换为`number`。还可以提供可选的 `culture` (例如，“en-US”)。


## Examples

### Example #1
获取 `"4.5"` 的十进制 `number` 值。
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
