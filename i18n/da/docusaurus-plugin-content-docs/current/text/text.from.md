---
title: Text.From
---

# Text.From


Opretter en tekstværdi ud fra den angivne værdi.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Returns the text representation of a specified value.

-   `value`: The value to convert to text. The value can be a `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, or `binary` value. If the given value is `null`, this function returns `null`.
-   `culture`: (Optional) The culture to use when converting the value to text (for example, "en-US").


## Examples

### Example #1
Opret en tekstværdi ud fra tallet 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Hent tekstækvivalenten for den angivne dato og det angivne klokkeslæt.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Hent den tyske tekstækvivalens for den angivne dato og det angivne klokkeslæt.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Hent en binær værdi fra tekst, der er kodet som hexadecimal, og ret værdien tilbage til tekst.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Hent de rækker i tabellen, der indeholder data for Frankrig, og konvertér datoerne til tekst ved hjælp af den franske kultur.
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
