---
title: Time.Second
---

# Time.Second


## Description

Zwraca składnik sekundy.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Zwraca składnik sekundy z wartości typu <code>time</code>, <code>datetime</code> lub <code>datetimezone</code> dostarczonej w parametrze <code>dateTime</code>.


## Examples

### Example #1 
Znajdź wartość sekund w wartości daty/godziny (datetime).
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
