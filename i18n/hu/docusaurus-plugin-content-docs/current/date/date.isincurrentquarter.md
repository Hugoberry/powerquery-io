---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Azt jelzi, hogy ez a dátum az aktuális negyedévre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték az aktuális negyedévre esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridő az aktuális negyedévre esik-e
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
