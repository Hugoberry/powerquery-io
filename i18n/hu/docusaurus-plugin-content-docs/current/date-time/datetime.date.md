---
title: DateTime.Date
---

# DateTime.Date


A megadott date, datetime vagy datetimezone típusú érték dátum összetevőjét adja vissza.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

A `dateTime` paraméter dátum összetevőjét adja vissza, ha a paraméter `date`, `datetime` vagy `datetimezone` értékű, vagy pedig `null`, ha a paraméter `null`.


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
