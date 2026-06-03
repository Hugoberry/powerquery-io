---
title: Single.From
---

# Single.From


Creates a Single from the given value.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a Single `number` value from the given `value`. If the given `value` is `null`, `Single.From` returns `null`. If the given `value` is `number` within the range of Single, `value` is returned, otherwise an error is returned. If `value` is of any other type, it will first be converted to a `number` using `Number.FromText`. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the Single `number` value of `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
