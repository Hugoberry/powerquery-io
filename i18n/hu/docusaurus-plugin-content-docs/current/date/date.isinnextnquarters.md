---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú negyedéven belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú negyedéven belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.

-   `dateTime`: Az értékelendő `date`, `datetime` vagy `datetimezone` érték.
-   `quarters`: A negyedévek száma.


## Examples

### Example #1
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot követő negyedév a következő két negyedéven belülre esik-e.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
