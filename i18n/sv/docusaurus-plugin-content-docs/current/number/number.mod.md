---
title: Number.Mod
---

# Number.Mod


En heltalsdivision dividerar två tal och returnerar resten.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerar resten från heltalsdivisionen av `number` med `divisor`. Om `number` eller `divisor` är `null` returnerar den här funktionen `null`.

-   `number`: Utdelningen.
-   `divisor`: Nämnaren.
-   `precision`: (Valfritt) Heltalsdivisionens precision. Den här parametern kan antingen vara `Precision.Double` för `Dubbla` precision eller `Precision.Decimal` för `Decimal` precision. Standardvärdet är `Precision.Double`.


## Examples

### Example #1
Hitta resten när 5 divideras med 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Hitta resten när du dividerar 10,5 med 0,2 med både `Dubbel` precision och `Decimal` precision.
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
