---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Wskazuje, czy ta data przypada w ciągu następnych tygodni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego tygodnia.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnych tygodni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego tygodnia.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>weeks</code>: liczba tygodni.</li>      </ul>


## Examples

### Example #1 
Określ, czy tydzień po bieżącej dacie systemu występuje w ciągu przyszłych dwóch tygodni.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
