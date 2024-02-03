---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő órában következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő órában következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális órában következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      </ul>


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
