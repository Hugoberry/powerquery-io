---
title: Date.AddMonths
---

# Date.AddMonths


Күнге көрсетілген айларды қосады.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

`datetime` `dateTime` мәніне `numberOfMonths` айды қосудан `date`, `datetime` немесе `datetimezone` нәтижесін қайтарады.

-   `dateTime`: айлар қосылатын `date`, `datetime` немесе `datetimezone` мәні.
-   `numberOfMonths`: қосатын айлар саны.


## Examples

### Example #1
5/14/2011 күнін білдіретін `date`, `datetime` немесе `datetimezone` мәніне 5 айды қосу.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
5/14/2011 08:15:22 AM күнін және уақытын білдіретін `date`, `datetime` немесе `datetimezone` мәніне 18 айды қосу.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
