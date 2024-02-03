---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Wskazuje, czy ta data/godzina przypada w ciągu następnych godzin określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnych godzin określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.      <ul>      <li><code>dateTime</code>: wartość <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>hours</code>: liczba godzin.</li>      </ul>


## Examples

### Example #1 
Określ, czy godzina po bieżącej dacie systemu występuje w ciągu następnych dwóch godzin.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
