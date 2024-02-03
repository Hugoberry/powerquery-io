---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Značí, zda toto datum spadá do aktuálního roku a následuje nebo předchází aktuálnímu dni podle aktuálního data a času v systému.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do aktuálního roku a následuje nebo předchází aktuálnímu dni podle aktuálního data a času v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda aktuální systémový čas spadá do roku končícího aktuálním datem.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
