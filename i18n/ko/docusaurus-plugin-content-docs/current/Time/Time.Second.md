---
title: Time.Second
---

# Time.Second


## Description

초 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

제공된 <code>time</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값 <code>dateTime</code>의 초 구성 요소를 반환합니다.


## Examples

### Example #1 
날짜/시간 값에서 초 값을 찾습니다.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
