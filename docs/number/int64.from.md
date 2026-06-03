---
title: Int64.From
---

# Int64.From


Creates a 64-bit integer from the given value.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returns a 64-bit integer `number` value from the given `value`. If the given `value` is `null`, `Int64.From` returns `null`. If the given `value` is `number` within the range of 64-bit integer without a fractional part, `value` is returned. If it has fractional part, then the number is rounded with the rounding mode specified. The default rounding mode is `RoundingMode.ToEven`. If `value` is of any other type, it will first be converted to a `number` using `Number.FromText`. Refer to `Number.Round` for the available rounding modes. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the 64-bit integer `number` value of `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Get the 64-bit integer `number` value of `"4.5"` using `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
