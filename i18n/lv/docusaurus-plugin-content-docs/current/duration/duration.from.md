---
title: Duration.From
---

# Duration.From


Izveido ilgumu no sniegtās vērtības.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Atgriež dotās vērtības ilguma vērtību.

-   `value`: vērtība, no kuras tiek atvasināts ilgums. Ja norādītā vērtība `value` ir `null`, šī funkcija atgriež `null`. Ja norādītā vērtība `value` ir `ilgums`, tiek atgriezta vērtība `value`. Šo tipu vērtības var pārvērst par `ilguma` vērtību:
    -   `teksts`: `ilguma` vērtība no teksta pagājušā laika formām (d.h:m:s). Detalizētas informācijas iegūšanai skatiet `Duration.FromText`.
    -   `skaitlis`: `ilguma` ekvivalents veselu un daļskaitļu dienu skaitam, kas izteikts ar `value`.

Ja vērtībai `value` ir kāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Pārveidojiet `2.525` par `duration` vērtību.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Pārvērtiet teksta vērtību `"2.05:55:20.34567"` par vērtību `ilgums`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
