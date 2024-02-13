---
title: Time.Minute
---

# Time.Minute


Trả về cấu phần phút.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần phút của giá trị <code>time</code>, <code>datetime</code> hoặc <code>datetimezone</code> được cung cấp, <code>dateTime</code>.


## Examples

### Example #1 
Tìm phút trong #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
