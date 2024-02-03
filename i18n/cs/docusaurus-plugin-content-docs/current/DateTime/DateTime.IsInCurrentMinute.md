---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Určuje, jestli tato hodnota datetime spadá do aktuální minuty vzhledem k aktuálnímu datu a času v systému.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Určuje, jestli předaná hodnota datetime <code>dateTime</code> spadá do aktuální minuty vzhledem k aktuálnímu datu a času v systému.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli aktuální systémový čas spadá do aktuální minuty.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
