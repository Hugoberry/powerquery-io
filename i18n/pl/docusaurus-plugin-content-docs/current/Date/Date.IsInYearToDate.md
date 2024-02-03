---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym roku i czy wypada w bieżącym dniu, czy przed nim.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa <code>dateTime</code> wypada w bieżącym roku i czy wypada w bieżącym dniu, czy przed nim.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w okresie od początku roku do daty.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
