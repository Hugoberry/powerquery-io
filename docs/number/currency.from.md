---
title: Currency.From
---

# Currency.From


Returns a currency value from the given value.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returns a `currency` value from the given `value`. If the given `value` is `null`, `Currency.From` returns `null`. If the given `value` is `number` within the range of currency, fractional part of the `value` is rounded to 4 decimal digits and returned. If `value` is of any other type, it will first be converted to a `number` using `Number.FromText`. Valid range for currency is `-922,337,203,685,477.5808` to `922,337,203,685,477.5807`. Refer to `Number.Round` for the available rounding modes. The default is `RoundingMode.ToEven`. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the `currency` value of `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Get the `currency` value of `"1.23455"` using `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
