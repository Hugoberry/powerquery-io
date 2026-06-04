---
title: Number.Mod
---

# Number.Mod


Kokonaisluku jakaa kaksi lukua ja palauttaa jakojäännöksen.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Palauttaa jakojäännöksen, joka saadaan kokonaisluvun `number` jakamisesta luvulla `divisor`. Jos `number` tai `divisor` on `null`, tämä funktio palauttaa `null`.

-   `number`: Jaettava.
-   `divisor`: Jakaja.
-   `precision`: (Valinnainen) Kokonaisluvun jaon tarkkuus. Tämä parametri voi olla joko `Precision.Double` `Double`\-muodolle tai `Precision.Decimal` `Decimal`\-muodolle. Oletusarvo on `Precision.Double`.


## Examples

### Example #1
Selvitä jakojäännös, kun luku 5 jaetaan luvulla 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Laske jakojäännös, kun jaat luvun 10,5 luvulla 0,2 käyttäen sekä `Double`\-muotoa että `Decimal`\-muotoa.
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
