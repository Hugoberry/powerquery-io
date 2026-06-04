---
title: Time.Second
---

# Time.Second


Секунд құрамдасын қайтарады.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `time`, `datetime` немесе `datetimezone` мәнінің секунд құрамдасын қайтарады, `dateTime`.


## Examples

### Example #1
datetime мәнінен секунд мәнін табыңыз.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
