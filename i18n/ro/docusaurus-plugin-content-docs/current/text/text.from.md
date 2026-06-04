---
title: Text.From
---

# Text.From


Creează o valoare text din valoarea dată.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Returnează reprezentarea text a unei valori specificate.

-   `value`: Valoarea de convertit în text. Valoarea poate fi un `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` sau o valoare `binary`. Dacă valoarea dată este `null`, această funcție returnează `null`.
-   `culture`: (opțional) cultura de utilizat la conversia valorii în text (de exemplu, „en-US”).


## Examples

### Example #1
Creaţi o valoare text din numărul 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Obțineți echivalentul text al datei și orei specificate.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Obțineți echivalentul de text german al datei și orei specificate.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Obțineți o valoare binară din textul codificat ca hexazecimal și schimbați valoarea înapoi în text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Obțineți rândurile din tabel care conțin date pentru Franța și efectuați conversia datelor în text utilizând cultura franceză.
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
