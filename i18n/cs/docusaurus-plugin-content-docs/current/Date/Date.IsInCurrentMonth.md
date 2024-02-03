---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Značí, zda toto datum spadá do aktuálního měsíce určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do aktuálního měsíce určeného aktuálním datem a časem v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do aktuálního měsíce.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
