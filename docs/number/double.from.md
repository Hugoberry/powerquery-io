---
title: Double.From
---

# Double.From


Creates a Double from the given value.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a Double `number` value from the given `value`. If the given `value` is `null`, `Double.From` returns `null`. If the given `value` is `number` within the range of Double, `value` is returned, otherwise an error is returned. If `value` is of any other type, it will first be converted to a `number` using `Number.FromText`. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the Double `number` value of `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
