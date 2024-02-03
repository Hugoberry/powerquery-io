---
title: DateTime.Date
---

# DateTime.Date


## Description

Restituisce il componente data del valore date, datetime o datetimezone specificato.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Restituisce il componente data di <code>dateTime</code>, il valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> specificato.


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
