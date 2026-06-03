---
title: Date.ToRecord
---

# Date.ToRecord


Trả về một bản ghi chứa các phần của giá trị ngày.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Trả về một bản ghi chứa các phần của giá trị ngày cho sẵn, `date`.

-   `date`: Một giá trị `date` nơi bản ghi các phần của giá trị đó sẽ được tính.


## Examples

### Example #1
Chuyển đổi giá trị `#date(2011, 12, 31)` thành một bản ghi chứa các phần từ giá trị ngày.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
