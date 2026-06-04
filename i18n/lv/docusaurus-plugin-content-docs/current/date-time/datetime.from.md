---
title: DateTime.From
---

# DateTime.From


Izveido datetime vērtību no sniegtās vērtības.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Atgriež `datetime` vērtību no norādītās vērtības `value`. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV"). Ja norādītā vērtība `value` ir `Null`, `DateTime.From` atgriež `Null`. Ja norādītā vērtība `value` ir `datetime`, tiek atgriezts `value`. Tālāk minēto tipu vērtības var pārvērst par `datetime` vērtību.

-   `text`: `datetime` vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā `DateTime.FromText`.
-   `date`: `datetime` vērtība ar `value` kā datuma komponentu un `12:00:00 AM` kā laika komponentu.
-   `datetimezone`: vietējais `datetime` ekvivalents vērtībai `value`.
-   `time`: `datetime` vērtība, kuras datuma komponents ir OLE automatizācijas datuma `0` ekvivalents un kuras laika komponents ir `value`.
-   `number`: `datetime` vērtības ekvivalents OLE automatizācijas datumam, kas izteikts ar `value`.

Ja vērtībai `value` ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Pārveidojiet `#time(06, 45, 12)` par `datetime` vērtību.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Pārveidojiet `#date(1975, 4, 4)` par `datetime` vērtību.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
