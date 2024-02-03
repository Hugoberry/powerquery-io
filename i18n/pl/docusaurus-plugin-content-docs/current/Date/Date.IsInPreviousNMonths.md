---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Wskazuje, czy ta data przypada w ciągu poprzednich miesięcy określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego miesiąca.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzednich miesięcy określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego miesiąca.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>months</code>: liczba miesięcy.</li>      </ul>


## Examples

### Example #1 
Określ, czy miesiąc przed bieżącą datą systemu występuje w ciągu poprzednich dwóch miesięcy.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
