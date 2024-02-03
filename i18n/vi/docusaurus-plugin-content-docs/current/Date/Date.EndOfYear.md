---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Trả về thời gian cuối năm.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Trả về thời gian cuối năm chứa <code>dateTime</code>, bao gồm cả số giây ở dạng phân số. Thông tin múi giờ được bảo toàn.      <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà từ đó tính toán ra thời gian cuối năm.</li>      </ul>


## Examples

### Example #1 
Nhận thời gian cuối năm cho 5/14/2011 05:00:00 CH.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Nhận thời gian kết thúc giờ cho 17/05/2011 05:00:00 CH -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
