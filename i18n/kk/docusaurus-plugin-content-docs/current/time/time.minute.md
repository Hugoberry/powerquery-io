---
title: Time.Minute
---

# Time.Minute


Минут құрамдасын қайтарады.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `time`, `datetime` немесе `datetimezone` мәнінің минут құрамдасын қайтарады, `dateTime`.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі минутты табу.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
