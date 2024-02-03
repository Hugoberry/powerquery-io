---
title: DateTime.Date
---

# DateTime.Date


## Description

Palauttaa annetun date-, datetime- tai datetimezone-arvon päivämääräosan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Palauttaa päivämääräosan kohteesta <code>dateTime</code>, annetusta <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvosta.


## Examples

### Example #1 
Selvitä kohteen #datetime(2010, 12, 31, 11, 56, 02) päivämääräarvo.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
