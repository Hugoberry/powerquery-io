---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Wskazuje, czy ta data przypada w ciągu poprzednich dni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego dnia.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzednich dni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego dnia.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>days</code>: liczba dni.</li>      </ul>


## Examples

### Example #1 
Określ, czy dzień przed bieżącą datą systemu występuje w ciągu poprzednich dwóch dni.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
