---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym roku.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa <code>dateTime</code> wypada w bieżącym roku.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy aktualna godzina systemu wypada w bieżącym roku.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
