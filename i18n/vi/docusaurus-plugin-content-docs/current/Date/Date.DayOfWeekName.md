---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Trả về tên của ngày trong tuần.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Trả về ngày trong tuần cho <code>date</code> được cung cấp. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhận tên của ngày trong tuần.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
