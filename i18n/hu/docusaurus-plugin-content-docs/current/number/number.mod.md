---
title: Number.Mod
---

# Number.Mod


Eloszt két számot maradékos osztással, és a maradékot adja vissza.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Visszaadja az `number` egész szám `divisor`\-vel történő osztásának maradékát. Ha `number` vagy `divisor` `null`, a függvény `null` értéket ad vissza.

-   `number`: Az osztandó.
-   `divisor`: Az osztó.
-   `precision`: (Nem kötelező) Az egész osztás pontossága. Ez a paraméter lehet `Precision.Double` a `Double` pontossághoz, vagy `Precision.Decimal` a `Decimal` pontossághoz. Az alapértelmezett érték a `Precision.Double`.


## Examples

### Example #1
A maradék meghatározása az 5 szám 3-mal való osztásakor
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Keresse meg a maradékot, amikor 10,5-öt eloszt 0,2-vel, mind `Dupla`, mind `Decimális` pontossággal.
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
