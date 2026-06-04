---
title: Number.Mod
---

# Number.Mod


L'enter divideix dos nombres i retorna la resta.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retorna el restant que resulta de la divisió entera de `number` per `divisor`. Si `number` o `divisor` són `null`, aquesta funció retorna `null`.

-   `number`: el dividend.
-   `divisor`: el divisor.
-   `precision`: (Opcional) la precisió de la divisió entera. Aquest paràmetre pot ser `Precision.Double` per a precisió `Double` o `Precision.Decimal` per a precisió `Decimal`. El valor per defecte és `Precision.Double`.


## Examples

### Example #1
Cerca la resta quan dividiu 5 per 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Calcula el restant de dividir 10,5 per 0,2, utilitzant tant la precisió `Double` com la precisió `Decimal`.
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
