---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Trả về thời gian cuối tuần.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Trả về thời gian cuối tuần chứa <code>dateTime</code>.    Hàm này lấy <code>Day</code> tùy chọn, <code>firstDayOfWeek</code>, để đặt làm ngày đầu tiên trong tuần cho phép tính tương đối này. Giá trị mặc định là <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà từ đó tính toán ra ngày cuối của tuần</li>        <li><code>firstDayOfWeek</code>: <i>[Tùy chọn]</i> Giá trị <code>Day.Type</code> biểu thị ngày đầu tiên trong tuần. Các giá trị có thể có là <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> và <code>Day.Saturday.</code> .Giá trị mặc định là <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Nhận thời gian kết thúc tuần cho 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Nhận thời gian kết thúc tuần cho 17/05/2011 05:00:00 CH -7:00 với Chủ Nhật là ngày đầu tiên trong tuần.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
