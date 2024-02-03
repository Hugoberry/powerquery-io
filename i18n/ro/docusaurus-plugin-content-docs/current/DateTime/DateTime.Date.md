---
title: DateTime.Date
---

# DateTime.Date


## Description

Returnează componenta date a valorii date, datetime sau datetimezone specificate.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Returnează componenta date <code>dateTime</code>, valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> dată.


## Examples

### Example #1 
Găsiţi valoarea date a #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
