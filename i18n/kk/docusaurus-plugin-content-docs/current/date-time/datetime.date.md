---
title: DateTime.Date
---

# DateTime.Date


Осы date, datetime немесе datetimezone мәнінің күн құрамдасын қайтарады.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Параметр `date`, `datetime` немесе `datetimezone` мәнінде болса, `dateTime` параметрінің күні компонентін қайтарада, ал параметр `null` болса, `null` қайтарады.


## Examples

### Example #1
#datetime(2010, 12, 31, 11, 56, 02) күн мәнін табу.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
