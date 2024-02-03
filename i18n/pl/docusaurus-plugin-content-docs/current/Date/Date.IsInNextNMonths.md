---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Wskazuje, czy ta data przypada w ciągu następnych miesięcy określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego miesiąca.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnych miesięcy określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego miesiąca.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>months</code>: liczba miesięcy.</li>      </ul>


## Examples

### Example #1 
Określ, czy miesiąc po bieżącej dacie systemu występuje w ciągu przyszłych dwóch miesięcy.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
