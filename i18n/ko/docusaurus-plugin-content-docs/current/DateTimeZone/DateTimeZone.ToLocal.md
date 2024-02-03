---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

표준 시간대 구성 요소를 현지 표준 시간대로 변환합니다.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

datetimezone 값 <code>dateTimeZone</code>의 표준 시간대 정보를 현지 표준 시간대 정보로 변경합니다.    <code>dateTimeZone</code>에 표준 시간대 구성 요소가 없으면 현지 표준 시간대 정보가 추가됩니다.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)의 표준 시간대 정보를 현지 표준 시간대(PST로 가정)로 변경합니다.
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
