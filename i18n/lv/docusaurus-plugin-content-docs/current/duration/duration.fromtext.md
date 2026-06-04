---
title: Duration.FromText
---

# Duration.FromText


Atgriež ilguma vērtību no teksta pagājušā laika formām (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Atgriež ilguma vērtību `text`no norādītā teksta. Ar šo funkciju var parsēt tālāk uzskaitītos formātus.

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Visi diapazoni ir ietveroši)

-   ddd: dienu skaits.
-   hh: stundu skaits no 0 līdz 23.
-   mm: minūšu skaits no 0 līdz 59.
-   ss: sekunžu skaits no 0 līdz 59.
-   ff: sekundes daļa no 0 līdz 9999999.


## Examples

### Example #1
Pārveidojiet `"2.05:55:20"` par `duration` vērtību.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
