---
title: Time.Second
---

# Time.Second


Retorna el component segon.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Retorna el component segon del valor `time`, `datetime` o `datetimezone` proporcionat, `dateTime`.


## Examples

### Example #1
Cerca el segon valor d'un valor datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
