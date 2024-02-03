---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Určuje, jestli tato hodnota datetime spadá do aktuální hodiny vzhledem k aktuálnímu systémovému datu a času.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Určuje, jestli předaná hodnota datetime <code>dateTime</code> spadá do aktuální hodiny vzhledem k aktuálnímu systémovému datu a času.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli aktuální systémový čas spadá do aktuální hodiny.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
