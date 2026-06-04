---
title: Date.From
---

# Date.From


Izveido datumu no sniegtās vērtības.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Atgriež dotās vērtības datuma vērtību.

-   `value`: vērtība, kas jāpārvērš par datumu. Ja norādītā vērtība ir `null`, šī funkcija atgriež `null`. Ja norādītā vērtība ir `date`, tiek atgriezta vērtība `value`. Šo tipu vērtības var pārvērst par `date` vērtību:
    -   `text`: `date` vērtība no teksta attēlojuma. Detalizētas informācijas iegūšanai skatiet `Date.FromText`.
    -   `datetime`: vērtības `value` datuma komponents.
    -   `datetimezone`: vērtības `value` vietējā datuma/laika ekvivalenta datuma komponents.
    -   `number`: tāda skaitļa ar peldošo komatu datuma/laika ekvivalenta datuma komponents, kura būtiskās komponents ir dienu skaits pirms vai pēc 1899. gada 30. decembra pusnakts un kura daļskaitļa komponents apzīmē laiku šajā dienā, dalītu ar 24. Piemēram, 1899. gada 31. decembra pusnaktij atbilst 1,0; 1900. gada 1. janvāra plkst. 6:00 atbilst 2,25; 1899. gada 29. decembra pusnaktij atbilst -1,0; bet 1899. gada 29. decembra plkst. 6:00 atbilst -1,25. Bāzes vērtība ir 1899. gada 30. decembra pusnakts. Minimālā vērtība ir 100. gada 1. janvāra pusnakts. Maksimālā vērtība ir 9999. gada 31. decembra pēdējais moments.
    -   Ja vērtībai `value` ir kāds cits tips, tiek atgriezta kļūda.
-   `culture`: dotās vērtības kultūra (piemēram, “lv-LV”).


## Examples

### Example #1
Pārvērst norādīto datumu un laiku par datuma vērtību.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Pārvērst norādīto skaitli par datuma vērtību.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Pārvērtiet vācu valodas teksta datumus kolonnā Publicētais datums par datumu vērtībām.
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
