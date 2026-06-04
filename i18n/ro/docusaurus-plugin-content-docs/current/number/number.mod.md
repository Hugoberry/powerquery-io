---
title: Number.Mod
---

# Number.Mod


Numărul întreg împarte două numere şi returnează restul.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnează restul rezultat din împărțirea întreagă a lui `number` la `divisor`. Dacă `number` sau `divisor` sunt `null`, această funcție returnează `null`.

-   `number`: deîmpărțitul.
-   `divisor`: împărțitorul.
-   `precision`: (opțional) precizia împărțirii întregi. Acest parametru poate fi `Precision.Double` pentru precizia `Double` sau `Precision.Decimal` pentru precizia `Decimal`. Valoarea implicită este `Precision.Double`.


## Examples

### Example #1
Găsiţi restul când împărţiţi 5 la 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Găsiți restul atunci când împărțiți 10,5 la 0,2, utilizând atât precizia `Double`, cât și precizia `Decimal`.
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
