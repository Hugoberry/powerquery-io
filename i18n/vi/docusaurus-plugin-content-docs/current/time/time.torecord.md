---
title: Time.ToRecord
---

# Time.ToRecord


Trả về một bản ghi chứa các phần của giá trị Thời gian.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Trả về một bản ghi chứa các phần của giá trị Thời gian cho sẵn, `time`.

-   `time`: Một giá trị `time` nơi bản ghi các phần của giá trị đó sẽ được tính.


## Examples

### Example #1
Chuyển đổi giá trị `#time(11, 56, 2)` thành một bản ghi chứa các giá trị Thời gian.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
