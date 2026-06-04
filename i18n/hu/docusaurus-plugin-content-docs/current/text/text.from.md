---
title: Text.From
---

# Text.From


Létrehoz egy szöveges értéket a megadott értékből.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Egy megadott érték szöveges ábrázolását adja vissza.

-   `value`: A szöveggé alakítandó érték. Az érték lehet `szám`, `dátum`, `idő`, `dátum és idő`, `időzóna szerinti dátum és idő`, `logikai`, `időtartam` vagy `bináris` érték. Ha a megadott érték `null`, a függvény `null` értéket ad vissza.
-   `culture`: (nem kötelező) Az érték szöveggé alakításakor használandó kulturális beállítás (például „hu-HU”).


## Examples

### Example #1
Létrehoz egy szöveges értéket a 3 számból.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
A megadott dátum és idő megfelelő szövegének beolvasása.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
A megadott dátum és idő német nyelvű megfelelőjének beolvasása.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Bináris érték beolvasása hexadecimálisként kódolt szövegből, és az érték visszahelyezése szövegre.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
A franciaországi adatokat tartalmazó tábla sorainak beolvasása és a dátumok szöveggé alakítása a francia kulturális környezet használatával.
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
