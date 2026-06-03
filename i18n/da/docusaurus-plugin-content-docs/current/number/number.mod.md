---
title: Number.Mod
---

# Number.Mod


Heltallet dividerer to tal og returnerer resten.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerer resten, der opstår ved heltalsdivision af `number` med `divisor`. Hvis `number` eller `divisor` er `null`, returnerer funktionen `null`.

-   `number`: Udbyttet.
-   `divisor`: Divisoren.
-   `precision`: (Valgfrit) Præcisionen af divisionen af heltal. Denne parameter kan være enten `Precision.Double` for `Double`\-præcision eller `Precision.Decimal` for `Decimal`\-præcision. Standardværdien er `Precision.Double`.


## Examples

### Example #1
Find resten, når du dividerer 5 med 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Find resten, når du dividerer 10,5 med 0,2, ved hjælp af både `dobbelt` præcision og `decimal` præcision.
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
