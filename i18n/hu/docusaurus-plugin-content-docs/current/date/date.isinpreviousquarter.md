---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző negyedévben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző negyedévben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Annak megállapítása, hogy az aktuális rendszeridőt megelőző negyedév az előző negyedévre esik-e
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
