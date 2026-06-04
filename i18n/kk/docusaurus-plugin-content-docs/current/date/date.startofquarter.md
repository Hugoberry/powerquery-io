---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Тоқсанның басын қайтарады.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

`dateTime` мәнін қамтитын тоқсанның басын қайтарады. `dateTime` `date`, `datetime` немесе `datetimezone` мәні болуы керек.


## Examples

### Example #1
10 қазан 2011 ж., 8:00AM үшін тоқсанның басын табу.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
