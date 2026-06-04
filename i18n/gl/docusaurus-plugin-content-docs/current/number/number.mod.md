---
title: Number.Mod
---

# Number.Mod


Divide de maneira enteira dous números e devolve o resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolva o resto resultante da división enteira de `number` por `divisor`. Se `number` ou `divisor` son `nulo`, esta función devolve `nulo`.

-   `number`: O dividendo.
-   `divisor`: O divisor.
-   `precision`: (Opcional) A precisión da división enteira. Este parámetro pode ser `Precision.Double` para precisión `Double` ou `Precision.Decimal` para precisión `Decimal`. O valor predeterminado é `Precision.Double`.


## Examples

### Example #1
Buscar o resto cando divide 5 entre 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Atopa o resto ao dividir 10,5 entre 0,2, usando tanto a precisión `Double` como a precisión `Decimal`.
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
