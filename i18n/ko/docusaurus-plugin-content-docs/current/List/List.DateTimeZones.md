---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

지정된 초기 값, 개수 및 증분 기간 값을 사용하여 datetimezone 값의 목록을 생성합니다.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code>에 시작하고 크기가 <code>count</code>인 <code>datetimezone</code> 값의 목록을 반환합니다. 지정된 증분 <code>step</code>은(는) 각 값에 더해지는 <code>duration</code> 값입니다.


## Examples

### Example #1 
정월 초하루 5분 전(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0))에 시작하여 1분씩 증가하는(#duration(0, 0, 1, 0)) 10개의 값을 포함하는 목록을 만듭니다.
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
