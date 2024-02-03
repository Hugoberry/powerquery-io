---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Azt jelzi, hogy ez a dátum az aktuális napra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Azt jelzi, hogy a megadott <code>dateTime</code> datetime érték az aktuális napra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.      <ul>      <li><code>dateTime</code>: A kiértékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték</li>      </ul>


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
