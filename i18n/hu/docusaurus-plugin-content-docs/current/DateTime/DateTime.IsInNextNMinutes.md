---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú percen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális percben következik be.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú percen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális percben következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      <li><code>minutes</code>: A percek száma.</li>      </ul>


## Examples

### Example #1 
Megállapítja, hogy a jelenlegi rendszeridő utáni perc a következő két percen belül van-e.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
