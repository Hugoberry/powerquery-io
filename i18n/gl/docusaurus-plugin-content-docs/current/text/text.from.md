---
title: Text.From
---

# Text.From


Crea un valor de texto a partir do valor indicado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Devolve a representación textual dun valor especificado.

-   `value` : O valor que se vai converter en texto. O valor pode ser un valor `número`, `data`, `hora`, `datahora`, `datetimezone`, `lóxico`, `duración` ou `binario`. Se o valor dado é `null`, esta función devolve `null`.
-   `culture` : (Opcional) A cultura que se empregará ao converter o valor a texto (por exemplo, "gl-ES").


## Examples

### Example #1
Crear un valor de texto a partir do número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Obter o texto equivalente á data e hora especificadas.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Obter o texto alemán equivalente á data e hora especificadas.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Obtén un valor binario do texto codificado como hexadecimal e cambia o valor de volta ao texto.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Obtén as filas na táboa que conteñen datos para Francia e converte as datas en texto usando a cultura francesa.
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
