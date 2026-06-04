---
title: Number.Mod
---

# Number.Mod


Ceo broj deli dva broja i vraća ostatak.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vraća ostatak koji proizlazi iz deljenja celog broja `number` od `divisor`. Ako su `number` ili `divisor` `null`, ova funkcija vraća `null`.

-   `number`: Deljenik.
-   `divisor`: Delilac.
-   `precision`: (opciono) Preciznost celobrojnog deljenja. Ovaj parametar može biti ili `Precision.Double` za `Double` preciznost ili `Precision.Decimal` za `Decimal` preciznost. Podrazumevana vrednost je `Precision.Double`.


## Examples

### Example #1
Pronalaženje ostatka prilikom deljenja 5 sa 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Pronađite ostatak kada podelite 10,5 sa 0,2, koristeći preciznost `Double` i `Decimal`.
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
