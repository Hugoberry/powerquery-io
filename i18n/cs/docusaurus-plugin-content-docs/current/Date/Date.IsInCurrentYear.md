---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Značí, zda toto datum spadá do aktuálního roku určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do aktuálního roku určeného aktuálním datem a časem v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do aktuálního roku.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
