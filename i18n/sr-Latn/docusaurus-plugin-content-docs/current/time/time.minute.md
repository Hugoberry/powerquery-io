---
title: Time.Minute
---

# Time.Minute


Vraća komponentu minuta.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Vraća komponentu minuta navedene vrednosti `time`, `datetime` ili `datetimezone`, `dateTime`.


## Examples

### Example #1
Pronalaženje minuta u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
