---
title: Time.Second
---

# Time.Second


Trả về cấu phần giây.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần giây của giá trị `time`, `datetime` hoặc `datetimezone` được cung cấp, `dateTime`.


## Examples

### Example #1
Tìm giá trị giây từ giá trị ngày giờ.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
