---
title: Time.Minute
---

# Time.Minute


## Description

분 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

제공된 <code>time</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값 <code>dateTime</code>의 분 구성 요소를 반환합니다.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36)에서 분을 찾습니다.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
