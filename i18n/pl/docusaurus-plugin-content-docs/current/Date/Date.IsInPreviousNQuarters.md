---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Wskazuje, czy ta data przypada w ciągu poprzednich kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzednich kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>quarters</code>: liczba kwartałów.</li>      </ul>


## Examples

### Example #1 
Określ, czy kwartał przed bieżącą datą systemu występuje w ciągu poprzednich dwóch kwartałów.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
