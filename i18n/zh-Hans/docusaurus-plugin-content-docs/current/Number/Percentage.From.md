---
title: Percentage.From
---

# Percentage.From


返回给定值的百分比值。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 `value` 返回 `percentage` 值。如果给定的 `value` 为 `null`，则 `Percentage.From` 将返回 `null`。如果给定的 `value` 是带有尾随百分比符号的 `text`，则返回转换的小数。否则，请使用 `Number.From` 将该值转换为 `number`。还可提供可选的 `culture` (例如 “en-US”)。


## Examples

### Example #1
获取 `"12.3%"` 的`百分比`值。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
