---
title: DateTime.Date
---

# DateTime.Date


Devolve o compoñente de data do valor date, datetime ou datetimezone que se indique.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Devolve o compoñente de data do parámetro `dateTime` se o parámetro ten un valor `date`, `datetime` ou `datetimezone`, ou `null` se o parámetro é `nulo`.


## Examples

### Example #1
Buscar o valor de data de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
