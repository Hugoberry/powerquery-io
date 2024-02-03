---
title: DateTime.Date
---

# DateTime.Date


## Description

Pateikiamas nurodytos datos, datetime arba datetimezone reikšmės datos komponentas.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Pateikiamas <code>dateTime</code> datos komponentas, nurodyta <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.


## Examples

### Example #1 
Rasti #datetime(2010, 12, 31, 11, 56, 02) datos reikšmę.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
