---
title: Time.StartOfHour
---

# Time.StartOfHour


Vraća početak sata.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Vraća početak sata koji predstavlja `dateTime`. `dateTime` mora da bude vrednost `time`, `datetime` ili `datetimezone`.


## Examples

### Example #1
Pronađite početak sata za 10. oktobar 2011. u 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
