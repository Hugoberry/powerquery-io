---
title: List.Durations
---

# List.Durations


## Description

지정된 초기 값, 개수 및 증분 기간 값을 사용하여 duration 값의 목록을 생성합니다.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code>에 시작하여 지정된 <code>duration</code> <code>step</code>씩 증가하는 <code>count</code> <code>duration</code> 값의 목록을 반환합니다.


## Examples

### Example #1 
1시간으로 시작하여 한 시간씩 증가하는 5개의 값을 포함하는 목록을 만듭니다.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
