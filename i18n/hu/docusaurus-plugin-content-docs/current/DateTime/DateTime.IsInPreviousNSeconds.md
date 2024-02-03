---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Jelzi, hogy ez a datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú másodpercen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Jelzi, hogy az adott <code>dateTime</code> datetime típusú érték a rendszeren beállított jelenlegi dátum és idő alapján az előző, adott számú másodpercen belül következik-e be. Vegye figyelembe, hogy a függvény false (hamis) értéket ad vissza, ha az átadott érték az aktuális másodpercben következik be.      <ul>      <li><code>dateTime</code>: Az értékelendő <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      <li><code>seconds</code>: A másodpercek száma.</li>      </ul>


## Examples

### Example #1 
Megállapítja, hogy a jelenlegi rendszeridő előtti másodperc az előző két másodpercen belül van-e.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
