---
title: Percentage.From
---

# Percentage.From


Returns a percentage value from the given value.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a `percentage` value from the given `value`. If the given `value` is `null`, `Percentage.From` returns `null`. If the given `value` is `text` with a trailing percent symbol, then the converted decimal number will be returned. Otherwise, the value will be converted to a `number` using `Number.From`. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the `percentage` value of `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
