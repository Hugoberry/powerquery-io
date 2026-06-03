---
title: DateTime.Date
---

# DateTime.Date


Verili bir date, datetime, or datetimezone değerinin tarih bileşenini döndürür.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Parametre bir `date`, `datetime` veya `datetimezone` değeri ise `dateTime` parametresinin tarih bileşenini veya parametre `null` ise `null` değerini döndürür.


## Examples

### Example #1
#datetime(2010, 12, 31, 11, 56, 02) değerinin tarih değerini bulur.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
