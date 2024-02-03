---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú héten belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális héten következik be.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú héten belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális héten következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      <li><code>weeks</code>: A hetek száma.</li>      </ul>


## Examples

### Example #1 
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot megelőző hét az előző két héten belülre esik-e.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
