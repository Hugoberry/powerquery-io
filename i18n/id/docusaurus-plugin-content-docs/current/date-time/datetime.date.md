---
title: DateTime.Date
---

# DateTime.Date


Menghasilkan komponen tanggal dari nilai date, datetime, atau datetimezone yang diberikan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Menghasilkan komponen tanggal dari parameter `dateTime` jika parameternya adalah nilai `date`, `datetime`, atau `datetimezone`, atau `null` jika parameternya `null`.


## Examples

### Example #1
Mencari nilai tanggal dari #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
