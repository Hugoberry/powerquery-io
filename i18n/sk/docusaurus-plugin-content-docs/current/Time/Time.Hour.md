---
title: Time.Hour
---

# Time.Hour


## Description

Vráti komponent hodiny.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Vráti komponent hodiny uvedenej hodnoty <code>time</code>, <code>datetime</code> alebo <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Vyhľadajte hodinu v hodnote #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
