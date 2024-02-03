---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Wskazuje, czy ta data/godzina przypada w ciągu poprzedniej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzedniej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.      <ul>      <li><code>dateTime</code>: wartość <code>date</code> lub <code>datetime</code> do oszacowania.</li>      </ul>


## Examples

### Example #1 
Określ, czy godzina przed bieżącą datą systemu występuje w ciągu poprzedniej godziny.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
