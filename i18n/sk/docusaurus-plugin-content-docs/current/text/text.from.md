---
title: Text.From
---

# Text.From


Vytvorí textovú hodnotu z danej hodnoty.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Vráti textové znázornenie zadaného výrazu.

-   `value`: Hodnota, ktorú treba previesť na text. Hodnota môže byť `číslo`, `dátum`, `čas`, `dátum a čas`, `časové pásmo`, `logická`, `trvanie` alebo `binárna` hodnota. Ak je zadaná hodnota `null`, táto funkcia vráti `null`.
-   `culture`: (Voliteľné) Kultúra, ktorá sa má použiť pri konverzii hodnoty na text (napríklad „en-US“).


## Examples

### Example #1
Vytvorte textovú hodnotu z čísla 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Získa textový ekvivalent zadaného dátumu a času.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Získa nemecký textový ekvivalent zadaného dátumu a času.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Získa binárnu hodnotu z textu kódovanú ako šestnástková a zmení hodnotu späť na text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Získa riadky v tabuľke, ktoré obsahujú údaje pre Francúzsko, a skonvertuje dátumy na text používajúci francúzsku jazykovú verziu.
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
