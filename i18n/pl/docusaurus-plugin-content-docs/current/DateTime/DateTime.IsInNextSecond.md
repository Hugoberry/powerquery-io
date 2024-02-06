---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Wskazuje, czy ta data/godzina przypada w ciągu następnej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.      <ul>      <li><code>dateTime</code>: wartość <code>date</code> lub <code>datetime</code> do oszacowania.</li>      </ul>


## Examples

### Example #1 
Określ, czy sekunda po bieżącej dacie systemu przypada w ciągu następnej sekundy.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
