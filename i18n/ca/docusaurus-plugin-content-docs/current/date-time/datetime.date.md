---
title: DateTime.Date
---

# DateTime.Date


Retorna el component data d'un valor de data, de data i hora o de fus horari concret.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Retorna el component de data del paràmetre `dateTime` si el paràmetre és un valor `date`, `datetime` o `datetimezone`, o `null` si el paràmetre és `null`.


## Examples

### Example #1
Troba el valor date de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
