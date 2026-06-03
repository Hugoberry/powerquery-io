---
title: Number.Mod
---

# Number.Mod


Integer divides two numbers and returns the remainder.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returns the remainder resulting from the integer division of `number` by `divisor`. If `number` or `divisor` are `null`, this function returns `null`.

-   `number`: The dividend.
-   `divisor`: The divisor.
-   `precision`: (Optional) The precision of the integer division. This parameter can be either `Precision.Double` for `Double` precision or `Precision.Decimal` for `Decimal` precision. The default value is `Precision.Double`.


## Examples

### Example #1
Find the remainder when you divide 5 by 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Find the remainder when you divide 10.5 by 0.2, using both `Double` precision and `Decimal` precision.
```powerquery
let
    Dividend = 10.5,
    Divisor = 0.2,

    #"Use Double Precision" = Number.Mod(Dividend, Divisor, Precision.Double),
    #"Use Decimal Precision" = Number.Mod(Dividend, Divisor, Precision.Decimal),

    // Convert to text to inspect precision
    #"Double To Text" = Number.ToText(#"Use Double Precision", "G"),
    #"Decimal To Text" = Number.ToText(#"Use Decimal Precision", "G"),

    #"Display Result" = [
        DoublePrecision = #"Double To Text",
        DecimalPrecision = #"Decimal To Text"
    ]
in
    #"Display Result"
```

Result: 
```powerquery
[
    DoublePrecision = "0.0999999999999994",
    DecimalPrecision = "0.1"
]
```




## Category
Number.Operations
