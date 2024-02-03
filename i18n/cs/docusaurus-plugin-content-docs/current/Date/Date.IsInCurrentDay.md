---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Značí, zda toto datum odpovídá aktuálnímu dni určenému aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> odpovídá aktuálnímu dni určenému aktuálním datem a časem v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do aktuálního dne.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
