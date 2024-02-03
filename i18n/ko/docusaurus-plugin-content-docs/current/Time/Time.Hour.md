---
title: Time.Hour
---

# Time.Hour


## Description

시간 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

제공된 <code>time</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값 <code>dateTime</code>의 시간 구성 요소를 반환합니다.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36)에서 시간을 찾습니다.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
