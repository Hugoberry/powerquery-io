---
title: Single.From
---

# Single.From


从给定的值创建 Single。


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 `value` 返回单精度 `number` 值。如果给定的 `value` 为 `null`，则 `Single.From` 将返回 `null`。如果给定的 `value` 为单精度范围内的 `number`，则返回 `value`，否则返回错误。如果 `value` 属于任何其他类型，则将首先使用 `Number.FromText` 将其转换为 `number`。还可以提供可选的 `culture` (例如，“en-US”)。


## Examples

### Example #1
获取 `"1.5"` 的单精度 `number` 值。
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
