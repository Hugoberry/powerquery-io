---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Azt jelzi, hogy ez a dátum az aktuális évre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték az aktuális évre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridő az aktuális évre esik-e
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
