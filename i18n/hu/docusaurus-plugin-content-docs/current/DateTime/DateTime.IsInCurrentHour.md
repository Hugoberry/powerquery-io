---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi órán belül következik-e be.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi órán belül következik-e be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      </ul>


## Examples

### Example #1 
Megállapítja, hogy a jelenlegi rendszeridő a jelenlegi órán belül van-e.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
