---
title: Date.From
---

# Date.From


Maakt een datum van de opgegeven waarde.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Hiermee wordt een datumwaarde geretourneerd voor de opgegeven waarde.

-   `value`: de waarde die moet worden omgezet naar een datum. Als de opgegeven waarde `null` is, retourneert deze functie `null`. Als de opgegeven waarde `date` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden geconverteerd naar een `date` waarde:
    -   `text`: een `date` waarde uit tekstweergave. Raadpleeg `Date.FromText` voor meer informatie.
    -   `datetime`: het datumonderdeel van de `value`.
    -   `datetimezone`: het datumonderdeel van het lokale datum/tijd-equivalent van `value`.
    -   `number`: de datumcomponent van het datumtijd-equivalent van een getal met drijvende komma waarvan de integraalcomponent het aantal dagen voor of na 30 december 1899 middernacht is, en waarvan de breukcomponent de tijd op die dag gedeeld door 24 vertegenwoordigt. Zo wordt bijvoorbeeld 31 december 1899 om middernacht voorgesteld door 1,0; 1 januari 1900 om 6 uur 's ochtends door 2,25; 29 december 1899 om middernacht door -1,0; en 29 december 1899 om 6 uur 's ochtends door -1,25. De basiswaarde is 30 december 1899, middernacht. De minimumwaarde is 1 januari 0100 middernacht. De maximumwaarde is het laatste moment van 31 december 9999.
    -   Als `value` van een ander type is, wordt er een fout geretourneerd.
-   `culture`: de cultuur van de opgegeven waarde (bijvoorbeeld 'en-US').


## Examples

### Example #1
Converteer de opgegeven datum en tijd naar een datumwaarde.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Converteer het opgegeven getal naar een datumwaarde.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Converteer de Duitse tekstdatums in de kolom Geposte datum naar datumwaarden.
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
