---
title: Time.Hour
---

# Time.Hour


## Description

Trả về cấu phần giờ.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Trả về cấu phần giờ của giá trị <code>time</code>, <code>datetime</code> hoặc <code>datetimezone</code> được cung cấp, <code>dateTime</code>.


## Examples

### Example #1 
Tìm giờ trong #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
