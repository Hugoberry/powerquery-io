---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Značí, zda toto datum spadá do aktuálního týdne určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do aktuálního týdne určeného aktuálním datem a časem v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do aktuálního týdne.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
