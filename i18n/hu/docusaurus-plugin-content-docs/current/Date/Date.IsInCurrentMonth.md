---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Azt jelzi, hogy ez a dátum az aktuális hónapra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Azt jelzi, hogy a megadott <code>dateTime</code> datetime érték az aktuális hónapra esik-e, amit a rendszeren beállított aktuális dátum és idő határoz meg.      <ul>      <li><code>dateTime</code>: A kiértékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték</li>      </ul>


## Examples

### Example #1 
Annak megállapítása, hogy az aktuális rendszeridő az aktuális hónapra esik-e
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
