---
title: Number.Mod
---

# Number.Mod


L'intero divide due numeri e restituisce la parte restante.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Restituisce il resto risultante dalla divisione di interi di `number` per `divisor`. Se `number` o `divisor` sono `null`, la funzione restituisce `null`.

-   `number`: il dividendo.
-   `divisor`: il divisore.
-   `precision`: (facoltativo) la precisione della divisione di interi. Questo parametro può essere `Precision.Double` per la precisione `Double` o `Precision.Decimal` per la precisione `Decimal`. Il valore predefinito è `Precision.Double`.


## Examples

### Example #1
Trovare la parte restante dalla divisione di 5 per 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Trovare il resto della divisione di 10,5 per 0,2 usando sia la precisione `Double` sia la precisione `Decimal`.
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
