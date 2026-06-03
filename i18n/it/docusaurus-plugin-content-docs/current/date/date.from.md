---
title: Date.From
---

# Date.From


Crea un data dal valore specificato.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Restituisce un valore di data dal valore specificato.

-   `value`: valore da convertire in una data. Se il valore specificato è `null`, la funzione restituisce `null`. Se il valore specificato è `date`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `date`:
    -   `text`: valore `date` della rappresentazione testuale. Per informazioni dettagliate, vedere `Date.FromText`.
    -   `datetime`: componente data di `value`.
    -   `datetimezone`: componente data dell'equivalente datetime locale di `value`.
    -   `number`: componente data dell'equivalente datetime di un numero a virgola mobile il cui componente integrale è il numero di giorni prima o dopo la mezzanotte del 30 dicembre 1899 e il cui componente frazionario rappresenta l'ora del giorno diviso per 24. Ad esempio, la mezzanotte del 31 dicembre 1899 è rappresentata da 1,0; 6.00, 1° gennaio 1900 è rappresentato da 2.25; mezzanotte del 29 dicembre 1899 è rappresentata da -1,0; e 6.00, 29 dicembre 1899 è rappresentato da -1,25. Il valore di base è mezzanotte del 30 dicembre 1899. Il valore minimo è mezzanotte del 1° gennaio 0100. Il valore massimo è l'ultimo momento del 31 dicembre 9999.
    -   Se `value` è di qualsiasi altro tipo, viene restituito un errore.
-   `culture`: la cultura del valore specificato, ad esempio "en-US".


## Examples

### Example #1
Convertire la data e l'ora specificate in un valore di data.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Convertire il numero specificato in un valore di data.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Converti le date di testo in tedesco con mesi abbreviati nella colonna Data di pubblicazione in valori di data.
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
