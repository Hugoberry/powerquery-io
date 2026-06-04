---
title: Double.From
---

# Double.From


从给定的值创建 Double。


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 `value` 返回双精度 `number` 值。如果给定的 `value` 为 `null`，则 `Double.From` 将返回 `null`。如果给定的 `value` 为双精度范围内的 `number`，则返回 `value`，否则返回错误。如果 `value` 属于任何其他类型，则将首先使用 `Number.FromText` 将其转换为 `number`。还可以提供可选的 `culture` (例如，“en-US”)。


## Examples

### Example #1
获取 `"4"` 的 Double `number` 值。
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
