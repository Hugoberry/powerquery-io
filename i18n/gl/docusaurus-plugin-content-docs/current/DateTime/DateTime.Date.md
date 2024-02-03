---
title: DateTime.Date
---

# DateTime.Date


## Description

Devolve o compoñente de data do valor date, datetime ou datetimezone que se indique.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Devolve o compoñente de data de <code>dateTime</code>, o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> indicado.


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
