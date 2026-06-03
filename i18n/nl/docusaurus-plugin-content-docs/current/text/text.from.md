---
title: Text.From
---

# Text.From


Maakt een tekstwaarde van de opgegeven waarde.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Retourneert de tekstweergave van een opgegeven waarde.

-   `value`: de waarde die moet worden geconverteerd naar tekst. De waarde kan een `nummer`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` of `binary` waarde zijn. Als de opgegeven waarde `null` is, retourneert deze functie `null`.
-   `culture`: (optioneel) de cultuur die moet worden gebruikt bij het converteren van de waarde naar tekst (bijvoorbeeld 'en-US').


## Examples

### Example #1
Een tekstwaarde van het getal 3 maken.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Het tekstequivalent van de opgegeven datum en tijd ophalen.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Het Duitse tekstequivalent van de opgegeven datum en tijd ophalen.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Een binaire waarde ophalen uit tekst die is gecodeerd als hexadecimaal en de waarde weer wijzigen in tekst.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Hiermee haalt u de rijen in de tabel op die gegevens voor Frankrijk bevatten en converteert u de datums naar tekst met behulp van de Franse cultuur.
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
