---
title: Number.Mod
---

# Number.Mod


Celo število deli dve števili in vrne ostanek.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrne ostanek, ki nastane pri deljenju celega števila `number` z `divisor`. Če je `number` ali `divisor` `null`, ta funkcija vrne `null`.

-   `number`: Deljenec.
-   `divisor`: Delitelj.
-   `precision`: (izbirno) natančnost deljenja celega števila. Ta parameter je lahko `Precision.Double` za natančnost vrste `Double` ali `Precision.Decimal` za natančnost vrste `Decimal`. Privzeta vrednost je `Precision.Double`.


## Examples

### Example #1
Poiščite ostanek deljenja števila 5 s številom 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Poiščite ostanek pri deljenju 10,5 z 0,2 z natančnostjo vrste `Double` in `Decimal`.
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
