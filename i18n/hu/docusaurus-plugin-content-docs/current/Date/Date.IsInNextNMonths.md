---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú hónapon belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján a következő, adott számú hónapon belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális hónapban következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      <li><code>months</code>: A hónapok száma.</li>      </ul>


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
