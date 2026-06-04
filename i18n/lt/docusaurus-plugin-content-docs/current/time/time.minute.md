---
title: Time.Minute
---

# Time.Minute


Pateikiamas minučių komponentas.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Pateikiamas nurodytos `time`, `datetime` arba `datetimezone` reikšmės minučių komponentas, `dateTime`.


## Examples

### Example #1
Raskite minutes #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
