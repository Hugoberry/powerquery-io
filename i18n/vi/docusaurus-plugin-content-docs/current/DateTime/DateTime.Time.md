---
title: DateTime.Time
---

# DateTime.Time


## Description

Trả về phần thời gian của giá trị datetime cho sẵn.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Trả về phần thời gian của giá trị datetime cho sẵn, <code>dateTime</code>.


## Examples

### Example #1 
Tìm giá trị thời gian của #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
