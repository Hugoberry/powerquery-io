---
title: Time.Hour
---

# Time.Hour


Pateikiamas valandų komponentas.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Pateikiamas nurodytos `time`, `datetime` arba `datetimezone` reikšmės valandų komponentas, `dateTime`.


## Examples

### Example #1
Raskite valandas #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
