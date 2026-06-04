---
title: Text.From
---

# Text.From


Tiek izveidota teksta vērtība no sniegtās vērtības.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Atgriež norādītās vērtības teksta attēlojumu.

-   `value`: Vērtība, ko konvertēt uz tekstu. Vērtība var būt `skaitlis`, `datums`, `laiks`, `datums un laiks`, `datums un laiks ar laika joslu`, `loģiska vērtība`, `ilgums` vai `binārā` vērtība. Ja norādītā vērtība ir `null`, šī funkcija atgriež `null`.
-   `culture`: (neobligāti) Kultūra, kas jāizmanto, pārvēršot vērtību tekstā (piemēram, "en-US").


## Examples

### Example #1
Izveidojiet teksta vērtību no skaitļa 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Iegūstiet norādītā datuma un laika teksta ekvivalentu.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Iegūstiet norādītā datuma un laika Vācu valodas teksta ekvivalentu.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Iegūstiet bināru vērtību no teksta, kas ir kodēts kā heksadecimāls, un mainiet vērtību atpakaļ uz tekstu.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Iegūstiet tās tabulas rindas, kas satur datus par Franciju, un pārvērtiet datumus tekstā, izmantojot franču kultūru.
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
