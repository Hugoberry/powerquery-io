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

<code>dateTime</code> değerinin, verilen <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değerinin tarih bileşenini döndürür.


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
