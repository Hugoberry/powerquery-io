---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Azt jelzi, hogy ez a dátum az aktuális évre esik-e, és az aktuális napon vagy az előtt van-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Azt jelzi, hogy a megadott <code>dateTime</code> datetime érték az aktuális évre esik-e, és az aktuális napon vagy az előtt van-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.      <ul>      <li><code>dateTime</code>: A kiértékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték</li>      </ul>


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
