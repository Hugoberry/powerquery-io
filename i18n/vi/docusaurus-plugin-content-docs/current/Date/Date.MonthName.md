---
title: Date.MonthName
---

# Date.MonthName


## Description

Trả về tên cấu phần tháng.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Trả về tên cấu phần tháng cho <code>date</code> được cung cấp. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhận tên tháng.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
