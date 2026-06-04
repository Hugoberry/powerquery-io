---
title: Text.From
---

# Text.From


Luo tekstiarvon annetusta arvosta.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Palauttaa määritetyn arvon tekstiesityksen.

-   `value`: Tekstiksi muunnettava arvo. Arvo voi olla `luku`, `päivämäärä`, `aika`, `päivämäärä ja aika`, `aikavyöhyke`, `looginen`, `kesto` tai `binaari`. Jos annettu arvo on `null`, tämä funktio palauttaa `null`.
-   `culture`: (Valinnainen) Maa-asetus, jota käytetään muunnettaessa arvoa tekstiksi (esimerkiksi en-US).


## Examples

### Example #1
Luo tekstiarvo luvusta 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Hae määritettyä päivämäärää ja aikaa vastaava teksti.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Hae määritettyä päivämäärää ja aikaa vastaava saksankielisen tekstin arvo.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Hae binaariarvo heksadesimaalimuotoiseksi koodatuista tekstistä ja muuta arvo takaisin tekstiksi.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Hae taulukon rivit, jotka sisältävät tietoja Ranskasta, ja muunna päivämäärät tekstiksi käyttäen Ranskan maa-asetusta.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
