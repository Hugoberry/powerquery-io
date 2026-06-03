---
title: Date.From
---

# Date.From


Skapar ett datumvärde från det angivna värdet.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Returnerar ett datumvärde från det givna värdet.

-   `value`: Det värde som ska omvandlas till ett datum. Om det angivna värdet är `null` returnerar den här funktionen `null`. Om det angivna värdet är `date` returneras `value`. Värden av följande typer kan omvandlas till ett `date`\-värde:
    -   `text`: Ett `date`\-värde från textrepresentation. Mer information finns i `Date.FromText`.
    -   `datetime`: Datumkomponenten för `value`.
    -   `datetimezone`: Datumkomponenten för den lokala datetime-motsvarigheten till `value`.
    -   `number`: Datumkomponenten för datetime-värdet som motsvarar ett flyttalsnummer vars heltalskomponent är antalet dagar före eller efter midnatt den 30 december 1899, och vars fraktionella komponent representerar tiden den dagen dividerat med 24. Till exempel representeras midnatt den 31 december 1899 av 1,0. 06.00 1 januari 1900 representeras av 2,25. Midnatt den 29 december 1899 representeras av -1,0, och 06.00 den 29 december 1899 representeras av -1,25. Basvärdet är midnatt den 30 december 1899. Minimivärdet är midnatt den 1 januari 0100. Det maximala värdet är det sista ögonblicket den 31 december 9999.
    -   Om `value` är av någon annan typ returneras ett fel.
-   `culture`: Kulturen för det angivna värdet (till exempel "sv-SE").


## Examples

### Example #1
Omvandla angivet datum och tid till ett datumvärde.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Omvandla det angivna talet till ett datumvärde.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Omvandla de tyska textdatumen i kolumnen Publiceringsdatum till datumvärden.
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
