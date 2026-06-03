---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Trả về một số trong khoảng từ 1 tới 54 cho biết ngày này rơi vào tuần nào trong năm.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Trả về một số nằm trong khoảng từ 1 đến 54 cho biết ngày, `dateTime`, thuộc tuần nào trong năm.

-   `dateTime`: Giá trị `datetime` của tuần trong năm được xác định.
-   `firstDayOfWeek`: Giá trị `Day.Type` tùy chọn cho biết ngày nào được xem là ngày đầu tiên của tuần mới (ví dụ: `Day.Sunday`). Nếu bạn không chỉ định rõ, thì giá trị mặc định áp dụng riêng cho từng văn hóa sẽ được sử dụng.


## Examples

### Example #1
Xác định tuần nào trong năm chứa ngày 27 tháng 3 năm 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Xác định tuần nào trong năm chứa ngày 27 tháng 3 năm 2011, dùng Thứ Hai là ngày đầu tiên của tuần.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
