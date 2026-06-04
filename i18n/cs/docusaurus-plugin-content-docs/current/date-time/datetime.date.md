---
title: DateTime.Date
---

# DateTime.Date


Vrátí komponentu data předané hodnoty date, datetime nebo datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Vrátí komponentu data parametru `dateTime`, pokud má parametr hodnotu `date`, `datetime` nebo `datetimezone`, případně `null`, pokud má parametr hodnotu `null`.


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
