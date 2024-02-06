---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym kwartale.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa <code>dateTime</code> wypada w bieżącym kwartale.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w bieżącym kwartale.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
