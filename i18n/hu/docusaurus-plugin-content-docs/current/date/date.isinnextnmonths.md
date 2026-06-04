---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú hónapon belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú hónapon belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.
-   `months`: A hónapok száma.


## Examples

### Example #1
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot követő hónap a következő két hónapon belülre esik-e.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
