---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú órán belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Jelzi, hogy az adott `dateTime` datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú órán belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.

-   `dateTime`: Az értékelendő `datetime` vagy `datetimezone` érték.
-   `hours`: Az órák száma.


## Examples

### Example #1
Megállapítja, hogy a jelenlegi rendszeridő előtti óra az előző két órán belül van-e.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
