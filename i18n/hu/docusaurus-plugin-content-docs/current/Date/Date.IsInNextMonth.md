---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő hónapban következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő hónapban következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      </ul>


## Examples

### Example #1 
Annak megállapítása, hogy az aktuális rendszeridőt követő hónap a következő hónapra esik-e
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
