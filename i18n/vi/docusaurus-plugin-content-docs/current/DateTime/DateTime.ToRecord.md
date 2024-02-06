---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Trả về một bản ghi chứa các phần của giá trị datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Trả về bản ghi có chứa các phần của giá trị datetime đã cho, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Giá trị <code>datetime</code> cho bản ghi có chứa các phần được tính toán.</li>      </ul>


## Examples

### Example #1 
Chuyển đổi giá trị &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; thành một bản ghi chứa giá trị Ngày và Giờ.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
