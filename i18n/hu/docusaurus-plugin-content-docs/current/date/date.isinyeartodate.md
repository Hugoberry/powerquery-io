---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Azt jelzi, hogy ez a dátum az aktuális évre esik-e, és az aktuális napon vagy az előtt van-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték az aktuális évre esik-e, és az aktuális napon vagy az előtt van-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridő az év eddig eltelt részére esik-e
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
