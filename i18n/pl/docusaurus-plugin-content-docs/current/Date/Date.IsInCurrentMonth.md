---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym miesiącu.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość w formacie datetime równa <code>dateTime</code> wypada w bieżącym miesiącu.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w bieżącym miesiącu.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
