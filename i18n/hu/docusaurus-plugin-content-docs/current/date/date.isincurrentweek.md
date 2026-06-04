---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Azt jelzi, hogy ez a dátum az aktuális hétre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték az aktuális hétre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridő az aktuális hétre esik-e
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
