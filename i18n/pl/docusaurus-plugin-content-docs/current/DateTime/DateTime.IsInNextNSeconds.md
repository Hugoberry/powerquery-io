---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Wskazuje, czy ta data/godzina przypada w ciągu następnych sekund określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w ciągu następnych sekund określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.      <ul>      <li><code>dateTime</code>: wartość <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      <li><code>seconds</code>: liczba sekund.</li>      </ul>


## Examples

### Example #1 
Określ, czy sekunda po bieżącej dacie systemu przypada w ciągu następnych dwóch sekund.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
