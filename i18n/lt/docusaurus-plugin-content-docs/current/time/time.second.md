---
title: Time.Second
---

# Time.Second


Pateikiamas antrasis komponentas.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Pateikiamas nurodytos `time`, `datetime` arba `datetimezone` reikšmės antrasis komponentas (`dateTime`).


## Examples

### Example #1
Raskite antrąją reikšmę iš reikšmės Data / laikas.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
