---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő másodpercben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő másodpercben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Megállapítja, hogy a jelenlegi rendszeridő utáni másodperc a következő másodpercen belül van-e.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
