---
title: Number.Mod
---

# Number.Mod


Dzieli dwie liczby i zwraca resztę z dzielenia.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Zwraca resztę wynikającą z dzielenia liczby całkowitej `number` przez `divisor`. Jeśli `number` lub `divisor` mają wartość `null`, ta funkcja zwraca wartość `null`.

-   `number`: dzielna.
-   `divisor`: dzielnik.
-   `precision`: (opcjonalnie) Dokładność dzielenia liczby całkowitej. Ten parametr może mieć wartość `Precision.Double` dla precyzji `Double` lub `Precision.Decimal` dla precyzji `Decimal`. Wartość domyślna to `Precision.Double`.


## Examples

### Example #1
Znajdź resztę z dzielenia 5 przez 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Znajdź resztę z dzielenia 10,5 przez 0,2, używając zarówno precyzji `Double`, jak i `Decimal`.
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
