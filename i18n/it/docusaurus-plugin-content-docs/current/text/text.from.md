---
title: Text.From
---

# Text.From


Crea un valore di testo dal valore specificato.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Restituisce la rappresentazione testuale di un valore specificato.

-   `value`: valore da convertire in testo. Il valore può essere un `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, or `binary` value. Se il valore specificato è `null`, la funzione restituisce `null`.
-   `culture`: (opzione facoltativa) le impostazioni cultura da usare quando si converte il valore in testo (ad esempio, "en-US").


## Examples

### Example #1
Creare un valore di testo dal numero 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Ottiene l'equivalente di testo della data e dell'ora specificate.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Ottiene l'equivalente del testo tedesco della data e dell'ora specificate.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Recupera un valore binario dal testo codificato come esadecimale e ripristina il valore in testo.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Ottiene le righe della tabella che contengono dati per la Francia e converte le date in testo utilizzando le impostazioni cultura francesi.
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
