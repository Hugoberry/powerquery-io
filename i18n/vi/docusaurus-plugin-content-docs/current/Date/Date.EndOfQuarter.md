---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Trả về thời gian cuối quý.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Trả về thời gian cuối quý chứa <code>dateTime</code>. Thông tin múi giờ được bảo toàn.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà từ đó tính toán ra thời gian cuối quý.</li>      </ul>


## Examples

### Example #1 
Tìm thời gian cuối quý cho ngày 10 tháng 10 năm 2011, 8:00 SA.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
