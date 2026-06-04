---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú héten belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális héten következik be.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú héten belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális héten következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.
-   `weeks`: A hetek száma.


## Examples

### Example #1
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot megelőző hét az előző két héten belülre esik-e.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
