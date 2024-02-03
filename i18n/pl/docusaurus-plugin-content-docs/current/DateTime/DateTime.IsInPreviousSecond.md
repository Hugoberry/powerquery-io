---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Wskazuje, czy ta data/godzina przypada w ciągu poprzedniej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzedniej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.      <ul>      <li><code>dateTime</code>: wartość <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      </ul>


## Examples

### Example #1 
Określ, czy sekunda przed bieżącą datą systemu występuje w ciągu poprzedniej sekundy.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
