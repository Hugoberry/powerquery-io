---
title: DateTime.Date
---

# DateTime.Date


Restituisce il componente data del valore date, datetime o datetimezone specificato.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Restituisce il componente data del parametro `dateTime` se il parametro è un valore `date`, `datetime` o `datetimezone` oppure restituisce `null` se il parametro è `null`.


## Examples

### Example #1
Trovare il valore di data di #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
