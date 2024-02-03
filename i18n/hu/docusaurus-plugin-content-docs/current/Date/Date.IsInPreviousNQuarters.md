---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Jelzi, hogy ez a date típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú negyedévben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú negyedévben következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális negyedévben következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      <li><code>quarters</code>: A negyedévek száma.</li>      </ul>


## Examples

### Example #1 
A példafüggvény megvizsgálja, hogy a rendszer pontos ideje szerinti napot megelőző negyedév az előző két negyedéven belülre esik-e.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
