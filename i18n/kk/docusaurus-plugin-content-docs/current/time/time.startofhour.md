---
title: Time.StartOfHour
---

# Time.StartOfHour


Сағаттың басын қайтарады.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

`dateTime` арқылы көрсетілетін сағаттың басын қайтарады. `dateTime` `time`, `datetime` немесе `datetimezone` мәні болуы керек.


## Examples

### Example #1
10 қазан 2011 ж., 8:10:32 үшін сағаттың басын табу.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
