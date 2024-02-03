---
title: DateTime.Date
---

# DateTime.Date


## Description

Menghasilkan komponen tanggal dari nilai date, datetime, atau datetimezone yang diberikan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Menghasilkan komponen tanggal <code>dateTime</code>, nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang ditetapkan.


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
