---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi percen belül következik-e be.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a jelenlegi percen belül következik-e be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Megállapítja, hogy a jelenlegi rendszeridő a jelenlegi percen belül van-e.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
