---
title: Text.From
---

# Text.From


Crea un valor de text a partir del valor donat.


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
Crea un valor de text a partir del nombre 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Obté l'equivalent de text de la data i l'hora especificades.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Obté l'equivalent de text alemany de la data i l'hora especificades.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Permet obtenir un valor binari del text codificat com a hexadecimal i tornar a canviar el valor al text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Permet obtenir les files de la taula que contenen dades de França i convertir les dates en text mitjançant la cultura francesa.
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
