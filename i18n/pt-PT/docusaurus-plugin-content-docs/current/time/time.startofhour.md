---
title: Time.StartOfHour
---

# Time.StartOfHour


Devolve o início da hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Devolve o início da hora representado por <code>dateTime</code>.    <code>dateTime</code> tem de ser um valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontre o início da hora para 10 de outubro de 2011, às 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
