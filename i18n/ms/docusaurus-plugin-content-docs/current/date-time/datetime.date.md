---
title: DateTime.Date
---

# DateTime.Date


Mengembalikan komponen tarikh bagi nilai tarikh, datetime atau datetimezone yang ditentukan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Mengembalikan komponen tarikh bagi `dateTime` parameter jika parameter ialah `tarikh`, `tarikhmasa` atau nilai `zonmasatarikh`, atau `nol` jika parameter `nol`.


## Examples

### Example #1
Cari nilai tarikh bagi #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
