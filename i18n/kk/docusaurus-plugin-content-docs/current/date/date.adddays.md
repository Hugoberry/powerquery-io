---
title: Date.AddDays
---

# Date.AddDays


Күнге көрсетілген күндерді қосады.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

`datetime` `dateTime` мәніне `numberOfDays` күнді қосудан `date`, `datetime` немесе `datetimezone` нәтижесін қайтарады.

-   `dateTime`: күндер қосылатын `date`, `datetime` немесе `datetimezone` мәні.
-   `numberOfDays`: қосатын күндер саны.


## Examples

### Example #1
5/14/2011 күнін білдіретін `date`, `datetime` немесе `datetimezone` мәніне 5 күнді қосу.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
