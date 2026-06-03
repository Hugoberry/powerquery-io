---
title: Decimal.From
---

# Decimal.From


Creates a Decimal from the given value.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a Decimal `number` value from the given `value`. If the given `value` is `null`, `Decimal.From` returns `null`. If the given `value` is `number` within the range of Decimal, `value` is returned, otherwise an error is returned. If `value` is of any other type, it will first be converted to a `number` using `Number.FromText`. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the Decimal `number` value of `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
