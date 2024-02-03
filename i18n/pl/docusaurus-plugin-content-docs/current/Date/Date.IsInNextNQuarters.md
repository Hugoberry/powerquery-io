---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Wskazuje, czy ta data przypada w ciągu następnych kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnych kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>quarters</code>: liczba kwartałów.</li>      </ul>


## Examples

### Example #1 
Określ, czy kwartał po bieżącej dacie systemu występuje w ciągu przyszłych dwóch kwartałów.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
