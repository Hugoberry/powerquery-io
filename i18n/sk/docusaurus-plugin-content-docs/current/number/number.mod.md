---
title: Number.Mod
---

# Number.Mod


Celé číslo vydelí dve čísla a vráti zvyšok.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vráti zvyšok po celočíselnom delení `number` číslom `divisor`. Ak majú `number` alebo `divisor` hodnotu `null`, táto funkcia vráti `null`.

-   `number`: Delenec.
-   `divisor`: Deliteľ.
-   `precision`: (Voliteľné) Presnosť celočíselného delenia. Tento parameter môže byť buď `Precision.Double` pre presnosť `Double` alebo `Precision.Decimal` pre presnosť `Decimal`. Predvolená hodnota je `Precision.Double`.


## Examples

### Example #1
Nájdite zvyšok delenia čísla 5 číslom 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Nájdite zvyšok po vydelení 10,5 číslom 0,2 pomocou presnosti `Double` a presnosti `Decimal`.
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
