---
title: Number.Mod
---

# Number.Mod


Provede celočíselné dělení dvou čísel a vrátí zbytek.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrátí zbytek, který je výsledkem celočíselného dělení `number` hodnotou `divisor`. Pokud `number` nebo `divisor` jsou `null`, tato funkce vrátí `null`.

-   `number`: Podíl.
-   `divisor`: Dělitel.
-   `precision`: (Nepovinné) Přesnost celočíselného dělení. Tento parametr může být `Precision.Double` pro `Double` přesnost nebo `Precision.Decimal` pro `Decimal` přesnost. Výchozí hodnota je `Precision.Double`.


## Examples

### Example #1
Zjistí zbytek po dělení čísla 5 číslem 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Zbytek spočítáte, když vydělíte 10,5 číslem 0,2, a to pomocí přesnosti `Double` a přesnosti `Decimal`.
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
