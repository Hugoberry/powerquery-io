---
title: Number.Mod
---

# Number.Mod


El entero divide dos números y devuelve el resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devuelve el resto resultante de la división entera de `number` por `divisor`. Si `number` o `divisor` son `null`, esta función devuelve `null`.

-   `number`: El dividendo.
-   `divisor`: El divisor.
-   `precision`: (Opcional) La precisión de la división entera. Este parámetro puede ser `Precision.Double` para precisión `Double` o `Precision.Decimal` para precisión `Decimal`. El valor predeterminado es `Precision.Double`.


## Examples

### Example #1
Buscar el resto cuando se divide 5 entre 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Encuentre el resultado al dividir 10,5 entre 0,2, utilizando tanto la precisión `Double` como la precisión `Decimal`.
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
