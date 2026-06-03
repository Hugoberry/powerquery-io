---
title: Date.From
---

# Date.From


Crea una fecha a partir del valor dado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Devuelve un valor de fecha a partir de un valor determinado.

-   `value`: el valor que se va a ocultar a una fecha. Si el valor especificado es `null`, esta función devuelve `null`. Si el valor especificado es `date`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir en un valor `date`:
    -   `text`: un valor `date` de la representación textual. Consulte `Date.FromText` para más información.
    -   `datetime`: el componente de fecha del `value`.
    -   `datetimezone`: componente de fecha del equivalente de fecha y hora local de `value`.
    -   `number`: componente de fecha de la equivalencia de una fecha y hora representada por un número de punto flotante, cuyo componente entero es el número de días antes o después de la medianoche del 30 de diciembre de 1899, y cuyo componente fraccionario representa el tiempo en ese día dividido entre 24. Por ejemplo, la medianoche del 31 de diciembre de 1899 se representa como 1.0; las 6 a.m. del 1 de enero de 1900 se representan como 2.25; la medianoche del 29 de diciembre de 1899 se representa como -1.0; y las 6 a.m. del 29 de diciembre de 1899 se representan como -1.25. El valor base es la medianoche del 30 de diciembre de 1899. El valor mínimo es la medianoche del 1 de enero del año 0100. El valor máximo es el último instante del 31 de diciembre del año 9999.
    -   Si `value` es de cualquier otro tipo, se devuelve un error.
-   `culture`: la referencia cultural del valor dado (por ejemplo, "en-US").


## Examples

### Example #1
Convierte la fecha y hora especificadas en un valor de fecha.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Convierte el número especificado en un valor de fecha.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Convierta las fechas de texto alemán de la columna Fecha de publicación en valores de fecha.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
