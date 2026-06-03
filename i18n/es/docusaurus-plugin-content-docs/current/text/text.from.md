---
title: Text.From
---

# Text.From


Crea un valor de texto a partir del valor dado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Devuelve la representación de texto de un valor especificado.

-   `value`: valor que se va a convertir en texto. El valor puede ser un `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` o `binary`. Si el valor especificado es `null`, esta función devuelve `null`.
-   `culture`: (Opcional) Referencia cultural que se va a usar al convertir el valor en texto (por ejemplo, "en-US").


## Examples

### Example #1
Crear un valor de texto a partir del número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Obtiene el equivalente de texto de la fecha y hora especificadas.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Obtiene el equivalente de texto alemán de la fecha y hora especificadas.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Obtiene un valor binario del texto codificado como hexadecimal y vuelve a cambiar el valor a texto.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Permite obtener las filas de la tabla que contienen datos de Francia y convertir las fechas en texto mediante la referencia cultural francesa.
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
