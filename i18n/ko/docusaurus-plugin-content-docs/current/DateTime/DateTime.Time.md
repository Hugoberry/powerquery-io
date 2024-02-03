---
title: DateTime.Time
---

# DateTime.Time


## Description

지정된 datetime 값의 시간 부분을 반환합니다.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

지정된 datetime 값 <code>dateTime</code>의 시간 부분을 반환합니다.


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02)의 시간 값을 확인합니다.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
