---
title: Number.Mod
---

# Number.Mod


Tamsayı iki sayıyı böler ve kalanı döndürür.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number` değerinin `divisor` ile tamsayı bölünmesinden elde edilen kalanı döndürür. `number` veya `divisor` `null` ise, bu işlev `null` değerini döndürür.

-   `number`: Bölünen.
-   `divisor`: Bölen.
-   `precision`: (İsteğe bağlı) Tamsayı bölünmesinin hassasiyeti. Bu parametre, `Double` hassasiyeti için `Precision.Double` veya `Decimal` hassasiyeti için `Precision.Decimal` olabilir. Varsayılan değer `Precision.Double`'dir.


## Examples

### Example #1
5'i 3'e bölmeden kalanı bulur.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
10,5'i 0,2'ye bölerek, hem `Double` hassasiyeti hem de `Decimal` hassasiyeti kullanarak kalanı bulun.
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
