---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő órában következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő órában következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Megállapítja, hogy a jelenlegi rendszeridő utáni óra a következő órán belül van-e.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
