---
title: Time.Hour
---

# Time.Hour


Vraća komponentu sata.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Vraća komponentu sata navedene vrednosti `time`, `datetime` ili `datetimezone`, `dateTime`.


## Examples

### Example #1
Pronalaženje sata u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
