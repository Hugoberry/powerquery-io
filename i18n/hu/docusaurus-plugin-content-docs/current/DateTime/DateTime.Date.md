---
title: DateTime.Date
---

# DateTime.Date


## Description

A megadott date, datetime vagy datetimezone típusú érték dátum összetevőjét adja vissza.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

A megadott <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú <code>dateTime</code> érték dátum összetevőjét adja vissza.


## Examples

### Example #1 
A #datetime(2010, 12, 31, 11, 56, 02) érték dátumértékének megállapítása
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
