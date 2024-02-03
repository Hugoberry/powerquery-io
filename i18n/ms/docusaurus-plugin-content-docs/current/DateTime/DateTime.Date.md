---
title: DateTime.Date
---

# DateTime.Date


## Description

Mengembalikan komponen tarikh bagi nilai tarikh, datetime atau datetimezone yang ditentukan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Mengembalikan komponen tarikh bagi <code>dateTime</code>, nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> yang ditentukan.


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
