---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Wskazuje, czy ta data przypada w poprzednim miesiącu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego miesiąca.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w poprzednim miesiącu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w bieżącym miesiącu.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      </ul>


## Examples

### Example #1 
Ustal, czy miesiąc przed aktualną godziną systemu wypada w poprzednim miesiącu.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
