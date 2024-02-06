---
title: DateTime.Date
---

# DateTime.Date


Devolve o componente de data do valor de date, datetime ou datetimezone especificado.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Devolve o componente de data de <code>dateTime</code>, o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> especificado.


## Examples

### Example #1 
Encontrar o valor de data de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
