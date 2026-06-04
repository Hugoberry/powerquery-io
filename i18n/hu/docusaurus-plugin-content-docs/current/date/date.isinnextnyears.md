---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú évben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális évben következik be.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú évben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális évben következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.
-   `years`: Az évek száma.


## Examples

### Example #1
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot követő év a következő két éven belülre esik-e.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
