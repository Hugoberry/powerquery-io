---
title: Text.From
---

# Text.From


Skapar ett textvärde från det angivna värdet.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Returnerar textrepresentationen av ett angivet värde.

-   `value`: Det värde som ska konverteras till text. Värdet kan vara en `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` eller `binary` värde. Om det angivna värdet är `null` returnerar den här funktionen `null`.
-   `culture`: (Valfritt) Kulturen som ska användas när värdet konverteras till text (till exempel "en-US").


## Examples

### Example #1
Skapa ett textvärde från talet 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Hämta texten som motsvarar det angivna datumet och den angivna tiden.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Hämta den tyska texten som motsvarar angivet datum och tid.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Hämta ett binärvärde från text som kodats som hexadecimalt och ändra tillbaka värdet till text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Hämta raderna i tabellen som innehåller data för Frankrike och konvertera datumen till text med hjälp av den franska kulturen.
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
