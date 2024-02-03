---
title: DateTime.Date
---

# DateTime.Date


## Description

Vrátí komponentu data předané hodnoty date, datetime nebo datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Vrátí komponentu data <code>dateTime</code>, předané hodnoty <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Najít datum v hodnotě #datetime(2010, 12, 31, 11, 56, 02)
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
