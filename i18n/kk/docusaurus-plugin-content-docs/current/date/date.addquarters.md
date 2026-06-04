---
title: Date.AddQuarters
---

# Date.AddQuarters


Күнге көрсетілген тоқсандарды қосады.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

`datetime` `dateTime` мәніне `numberOfQuarters` тоқсанды қосудан `date`, `datetime` немесе `datetimezone` нәтижесін қайтарады.

-   `dateTime`: тоқсандар қосылып жатқан `date`, `datetime` немесе `datetimezone` мәні.
-   `numberOfQuarters`: қосатын тоқсандар саны.


## Examples

### Example #1
5/14/2011 күнін білдіретін `date`, `datetime` немесе `datetimezone` мәніне 1 тоқсанды қосу.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
