---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Trả về một số (nằm trong khoảng từ 0 đến 6) cho biết ngày trong tuần của giá trị được cung cấp.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Trả về một số (nằm trong khoảng từ 0 đến 6) cho biết ngày trong tuần của <code>dateTime</code> được cung cấp.  <ul>        <li><code>dateTime</code>: Một giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: Một giá trị <code>Day</code> cho biết ngày sẽ được coi là ngày đầu tuần. Các giá trị được phép là Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday hoặc Day.Saturday. Nếu bạn không chỉ định, giá trị mặc định tùy thuộc vào văn hóa sẽ được sử dụng.</li>      </ul>


## Examples

### Example #1 
Lấy ngày đại diện cho tuần là thứ Hai, ngày 21 tháng 2 năm 2011, coi Chủ Nhật là ngày đầu tuần.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Lấy ngày đại diện cho tuần là thứ Hai, ngày 21 tháng 2 năm 2011, coi thứ Hai là ngày đầu tuần.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
