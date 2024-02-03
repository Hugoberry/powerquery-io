---
title: DateTime.Date
---

# DateTime.Date


## Description

Vraća komponentu datuma za date, datetime ili datetimezone vrednosti.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Vraća komponentu datuma za <code>dateTime</code>, datu vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronalaženje vrednosti datuma za #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
