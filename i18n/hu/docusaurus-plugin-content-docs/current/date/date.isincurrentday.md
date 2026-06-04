---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Azt jelzi, hogy ez a dátum az aktuális napra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték az aktuális napra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridő az aktuális napra esik-e
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
