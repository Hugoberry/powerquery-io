---
title: Date.StartOfDay
---

# Date.StartOfDay


Күннің басын қайтарады.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

`dateTime` арқылы көрсетілетін күнінің басын қайтарады. `dateTime` `date`, `datetime` немесе `datetimezone` мәні болуы керек.


## Examples

### Example #1
10 қазан 2011 ж., 8:00 үшін күннің басын табу.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
