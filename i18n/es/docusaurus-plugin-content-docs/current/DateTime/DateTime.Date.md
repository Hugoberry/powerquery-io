---
title: DateTime.Date
---

# DateTime.Date


## Description

Devuelve el componente de fecha del valor date, datetime o datetimezone especificado.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Devuelve el componente de fecha de <code>dateTime</code>, el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> dados.


## Examples

### Example #1 
Buscar el valor de fecha de #datetime (2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
