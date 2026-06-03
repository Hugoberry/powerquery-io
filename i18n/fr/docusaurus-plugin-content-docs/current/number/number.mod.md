---
title: Number.Mod
---

# Number.Mod


L'entier divise deux nombres et retourne le reste.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retourne le reste résultant de la division d’entiers de `number` par `divisor`. Si `number` ou `divisor` sont `null`, cette fonction retourne `null`.

-   `number` : dividende.
-   `divisor` : diviseur.
-   `precision` : (facultatif) précision de la division d’entiers. Ce paramètre peut être `Precision.Double` pour une précision `Double` ou `Precision.Decimal` pour une précision `Decimal`. La valeur par défaut est `Precision.Double`.


## Examples

### Example #1
Recherche le reste lorsque vous divisez 5 par 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Rechercher le reste lorsque vous divisez 10,5 par 0,2, à l’aide de la précision `Double` et de la précision `Decimal`.
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
