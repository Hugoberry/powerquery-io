---
title: Date.FromText
---

# Date.FromText


Izveido Date no lokālā, universālā un pielāgotā Date formāta.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

No teksta attēlojuma veido datuma vērtību.

-   `text`: teksta vērtība, kas jāpārvērš par datumu.
-   `options`: neobligāts `record`, ko var nodrošināt, lai norādītu papildu rekvizītus. Parametrā `record` var būt šādi lauki:
    -   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Papildinformācijai apmeklējiet https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas rezultātā tiks iegūti `null` rezultāti datuma pārsēšanā.
    -   `Culture`: ja `Format` vērtība nav null, `Culture` kontrolē dažus formāta norādītājus. Piemēram, izmantojot `"en-US"`, `"MMM"` ir `"Jan", "Feb", "Mar", ...`, bet, izmantojot `"ru-RU"`, `"MMM"` ir `"янв", "фев", "мар", ...`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Ja `Culture` vērtība ir `null` vai šis parametrs ir izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` var būt arī teksta vērtība. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertēt `"2010-12-31"` par `date` vērtību.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Atrodiet datumu Gregora kalendārā, kas atbilst 1400. gada pēc Hidžras kalendāra sākumam.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Pārvērtiet itāļu valodas teksta datumus ar saīsinātiem mēnešiem kolonnā Publicētais datums par datumu vērtībām.
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
