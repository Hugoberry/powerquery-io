---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym tygodniu.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa <code>dateTime</code> wypada w bieżącym tygodniu.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w bieżącym tygodniu.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
