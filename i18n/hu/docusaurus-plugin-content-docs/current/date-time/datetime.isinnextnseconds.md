---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú másodpercen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú másodpercen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.
-   `seconds`: A másodpercek száma.


## Examples

### Example #1
Megállapítja, hogy a jelenlegi rendszeridő utáni másodperc a következő két másodpercen belül van-e.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
