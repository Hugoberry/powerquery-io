---
title: Text.From
---

# Text.From


Erstellt einen Textwert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Gibt die Textdarstellung eines angegebenen Werts zurück.

-   `value`: Der Wert, der in Text konvertiert werden soll. Der Wert kann `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` oder ein `binary`\-Wert sein. Wenn der angegebene Wert `null` ist, gibt diese Funktion `null` zurück.
-   `culture`: (Optional) Die Kultur, die beim Konvertieren des Werts in Text verwendet werden soll (z. B. "en-US").


## Examples

### Example #1
Erstellt einen Textwert auf der Grundlage der Zahl 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Ruft die Textentsprechung des angegebenen Datums und der angegebenen Uhrzeit ab.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Hiermit rufen Sie die deutsche Textentsprechung für das angegebene Datum und die angegebene Uhrzeit ab.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Ruft einen Binärwert aus text-codiertem Hexadezimalwert ab, und ändert den Wert zurück in Text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Rufen Sie die Zeilen in der Tabelle ab, die Daten für Frankreich enthalten, und konvertieren Sie die Daten in Text unter Verwendung der französischen Kultur.
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
