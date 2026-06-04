---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi órán belül következik-e be.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi órán belül következik-e be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.


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
