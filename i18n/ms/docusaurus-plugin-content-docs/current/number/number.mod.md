---
title: Number.Mod
---

# Number.Mod


Integer membahagikan dua nombor dan mengembalikan bakinya.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Mengembalikan baki hasil daripada pembahagian integer `number` oleh `divisor`. Jika `number` atau `divisor` adalah `nol`, fungsi ini mengembalikan `nol`.

-   `number`: Dividen.
-   `divisor`: Pembahagi
-   `precision`: (Pilihan) Ketepatan pembahagian integer. Parameter ini boleh sama ada `Precision.Double` untuk ketepatan `Double` atau `Precision.Decimal` untuk ketepatan `Decimal`. Nilai lalai ialah `Precision.Double`.


## Examples

### Example #1
Cari baki apabila anda membahagikan 5 dengan 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Cari baki apabila anda membahagikan 10.5 dengan 0.2, menggunakan kedua-dua `kepersisan`Berganda dan `Perpuluhan`.
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
