---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Značí, zda toto datum spadá do aktuálního čtvrtletí určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do aktuálního čtvrtletí určeného aktuálním datem a časem v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do aktuálního čtvrtletí.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
