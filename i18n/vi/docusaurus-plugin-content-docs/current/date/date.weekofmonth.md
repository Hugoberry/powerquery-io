---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Trả về một số trong khoảng từ 1 tới 6 cho biết ngày này rơi vào tuần nào trong tháng.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Trả về một số trong khoảng từ 1 tới 6 cho biết ngày <code>dateTime</code> rơi vào tuần nào trong tháng. <ul>        <li><code>dateTime</code>: Một giá trị <code>datetime</code> mà tuần trong tháng được xác định.</li>      </ul>


## Examples

### Example #1 
Xác định tuần mà ngày 15 tháng 03 rơi vào trong năm 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
