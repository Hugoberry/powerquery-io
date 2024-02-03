---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Wskazuje, czy ta data/godzina przypada w ciągu poprzednich minut określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu poprzednich minut określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.      <ul>      <li><code>dateTime</code>: <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>minutes</code>: liczba minut.</li>      </ul>


## Examples

### Example #1 
Określ, czy minuta przed bieżącą datą systemu występuje w ciągu poprzednich dwóch minut.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
