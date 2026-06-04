---
title: Text.From
---

# Text.From


Vytvoří z dané hodnoty textovou hodnotu.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Vrátí textovou reprezentaci zadané hodnoty.

-   `value`: Hodnota, která se má převést na text. Hodnota může být typu `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` nebo `binary`. Pokud je daná hodnota `null`, vrátí tato funkce hodnotu `null`.
-   `culture`: (Volitelné) Jazyková verze, která se má použít při převodu hodnoty na text (například en-US)


## Examples

### Example #1
Vytvoří textovou hodnotu z čísla 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Získá textový ekvivalent zadaného data a času.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Získá ekvivalent německého textu zadaného data a času.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Získá binární hodnotu z textu kódovaného jako šestnáctková hodnota a změní hodnotu zpět na text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Získá řádky v tabulce obsahující data pro Francii a převede data na text pomocí jazykové verze francouzštiny.
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
