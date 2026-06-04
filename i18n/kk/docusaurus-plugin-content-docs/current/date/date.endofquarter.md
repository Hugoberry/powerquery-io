---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Тоқсанның соңын қайтарады.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

`dateTime` мәнін қамтитын тоқсанның соңын қайтарады. Уақыт белдеуі туралы деректер сақталады.

-   `dateTime`: тоқсанның соңы есептелетін `date`, `datetime` немесе `datetimezone` мәні


## Examples

### Example #1
10 қазан 2011 ж., 8:00AM үшін тоқсанның соңын табу.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
