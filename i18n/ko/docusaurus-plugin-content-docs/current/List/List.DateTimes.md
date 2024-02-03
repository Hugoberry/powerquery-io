---
title: List.DateTimes
---

# List.DateTimes


## Description

지정된 초기 값, 개수 및 증분 기간 값을 사용하여 datetime 값의 목록을 생성합니다.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code>에 시작하고 크기가 <code>count</code>인 <code>datetime</code> 값의 목록을 반환합니다. 지정된 증분 <code>step</code>은(는) 각 값에 더해지는 <code>duration</code> 값입니다.


## Examples

### Example #1 
정월 초하루 5분 전(#datetime(2011, 12, 31, 23, 55, 0))에 시작하여 1분씩 증가하는(#duration(0, 0, 1, 0)) 10개의 값을 포함하는 목록을 만듭니다.
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
