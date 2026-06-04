---
title: Date.AddYears
---

# Date.AddYears


Күнге көрсетілген жылдарды қосады.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

`datetime` `dateTime` мәніне `numberOfYears` қосудан `date`, `datetime` немесе `datetimezone` нәтижесін қайтарады.

-   `dateTime`: жылдар қосылатын `date`, `datetime` немесе `datetimezone` мәні.
-   `numberOfYears`: қосатын жылдар саны.


## Examples

### Example #1
5/14/2011 күнін білдіретін `date`, `datetime` немесе `datetimezone` мәніне 4 жылды қосу.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
5/14/2011 08:15:22 AM күнін және уақытын білдіретін `date`, `datetime` немесе `datetimezone` мәніне 10 жылды қосу.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
