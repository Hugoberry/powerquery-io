---
title: Time.Hour
---

# Time.Hour


Сағат құрамдасын қайтарады.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `time`, `datetime` немесе `datetimezone` мәнінің сағат құрамдасын қайтарады, `dateTime`.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі уақытты табу.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
