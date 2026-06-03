---
title: Text.From
---

# Text.From


Tworzy wartość tekstową na podstawie danej wartości.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację określonej wartości.

-   `value`: wartość do przekonwertowania na tekst. Wartość może być `number`, `date`, `time`, `datetime`, wartość `datetimezone`, `logical`, `duration` lub `binary`. Jeśli podana wartość to `null`, ta funkcja zwraca `null`.
-   `culture`: (opcjonalnie) kultura używana podczas konwertowania wartości na tekst (na przykład „en-US”).


## Examples

### Example #1
Utwórz wartość tekstową na podstawie wartości liczbowej równej 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Pobierz tekstowy odpowiednik określonej daty i godziny.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Pobierz niemiecki odpowiednik tekstu z określonej daty i godziny.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Pobierz wartość binarną z tekstu zakodowanego jako wartość szesnastkową i zmień wartość z powrotem na tekst.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Pobierz wiersze w tabeli zawierające dane dla Francji i przekonwertuj daty na tekst przy użyciu kultury francuskiej.
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
