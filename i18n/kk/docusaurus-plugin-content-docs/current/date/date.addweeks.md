---
title: Date.AddWeeks
---

# Date.AddWeeks


Күнге көрсетілген апталарды қосады.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

`datetime` `dateTime` мәніне `numberOfWeeks` аптаны қосудан `date`, `datetime` немесе `datetimezone` нәтижесін қайтарады.

-   `dateTime`: апталар қосылатын `date`, `datetime` немесе `datetimezone` мәні.
-   `numberOfWeeks`: қосатын апталар саны.


## Examples

### Example #1
5/14/2011 күнін білдіретін `date`, `datetime` немесе `datetimezone` мәніне 2 аптаны қосу.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
