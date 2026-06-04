---
title: Number.Mod
---

# Number.Mod


Bilangan bulat membagi dua bilangan dan menghasilkan sisanya.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Menghasilkan sisa hasil dari pembagian bilangan bulat `number` oleh `divisor`. Jika `number` atau `divisor` `null`, fungsi ini menghasilkan `null`.

-   `number`: Pecahan.
-   `divisor`: Pembagi.
-   `precision`: (Opsional) Presisi pembagian bilangan bulat. Parameter ini dapat berupa `Precision.Double` untuk presisi `Double` atau `Precision.Decimal` untuk presisi `Decimal`. Nilai default adalah `Precision.Double`.


## Examples

### Example #1
Mencari sisa hasil pembagian 5 dengan 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Temukan sisanya ketika Anda membagi 10,5 dengan 0,2, menggunakan presisi `Double` presisi dan presisi `Decimal`.
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
