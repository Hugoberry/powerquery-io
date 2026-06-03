---
title: Date.FromText
---

# Date.FromText


Maakt een datum van lokale, universele en aangepaste datumnotaties.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Maakt een datumwaarde van een tekstweergave.

-   `text`: een tekstwaarde die moet worden omgezet naar een datum.
-   `options`: een optionele `record` die kan worden opgegeven om aanvullende eigenschappen op te geven. De `record` kan de volgende velden bevatten:
    -   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Het weglaten van dit veld of het opgeven van `null` resulteert in het parseren van de datum met de beste inspanning.
    -   `Culture`: als `Format` niet null is, beheert `Culture` bepaalde indelingsaanduidingen. Bijvoorbeeld: in `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, terwijl in `"ru-RU"` `"MMM"` is `"янв", "фев", "мар", ...`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Wanneer `Culture` is `null` of wordt weggelaten, wordt `Culture.Current` gebruikt.

Ter ondersteuning van verouderde werkstromen kan `options` ook een tekstwaarde zijn. Dit gedraagt zich hetzelfde als `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`'2010-12-31'` converteren naar een `date`\-waarde.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Zoek de datum in de Gregoriaanse kalender die overeenkomt met het begin van 1400 in de Hijri-kalender.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Converteer de Italiaanse tekstdatums met afgekorte maanden in de kolom Geposte datum naar datumwaarden.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
