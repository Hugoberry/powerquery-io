---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Určuje, jestli tato hodnota datetime spadá do aktuální sekundy vzhledem k aktuálnímu datu a času v systému.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Určuje, jestli předaná hodnota datetime <code>dateTime</code> spadá do aktuální sekundy vzhledem k aktuálnímu datu a času v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli aktuální systémový čas spadá do aktuální sekundy.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
