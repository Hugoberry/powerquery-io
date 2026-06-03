---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Cho biết ngày này có rơi vào năm nhuận hay không.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn `dateTime` có rơi vào năm nhuận hay không.

-   `dateTime`: Một giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định năm 2012, như được biểu thị bằng `#date(2012, 01, 01)` có phải là năm nhuận hay không.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
