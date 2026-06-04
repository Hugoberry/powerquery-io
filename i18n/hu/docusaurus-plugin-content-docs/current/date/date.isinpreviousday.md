---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző napon következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális napon következik be.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző napon következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális napon következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridőt megelőző nap az előző napra esik-e
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
