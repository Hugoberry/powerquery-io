---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Wskazuje, czy ta data wypada w bieżącym dniu, na podstawie aktualnej daty i godziny w systemie.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa <code>dateTime</code> wypada w bieżącym dniu.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w bieżącym dniu.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
