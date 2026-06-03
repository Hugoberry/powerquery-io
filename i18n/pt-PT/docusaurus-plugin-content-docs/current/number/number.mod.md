---
title: Number.Mod
---

# Number.Mod


Efetua a divisão de dois números inteiros e devolve o resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolve o resto resultante da divisão inteira de `number` por `divisor`. Se `number` ou `divisor` forem `nulos`, esta função devolve `nulo`.

-   `number`: o dividendo.
-   `divisor`: o divisor.
-   `precision`: (Opcional) A precisão da divisão inteira. Este parâmetro pode ser `Precision.Double` para precisão `Double` ou `Precision.Decimal` para precisão `Decimal`. O valor predefinido é `Precision.Double`.


## Examples

### Example #1
Determinar o resto da divisão de 5 por 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Determine o resto da divisão de 10,5 por 0,2, utilizando tanto a precisão `Double` como a precisão `Decimal`.
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
