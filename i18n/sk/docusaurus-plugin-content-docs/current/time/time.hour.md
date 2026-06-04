---
title: Time.Hour
---

# Time.Hour


Vráti komponent hodiny.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Vráti komponent hodiny uvedenej hodnoty `time`, `datetime` alebo `datetimezone`, `dateTime`.


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
