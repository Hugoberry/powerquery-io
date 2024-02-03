---
title: List.Times
---

# List.Times


## Description

지정된 초기 값, 개수 및 증분 기간 값을 사용하여 time 값의 목록을 생성합니다.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code>에 시작하고 크기가 <code>count</code>인 <code>time</code> 값의 목록을 반환합니다. 지정된 증분 <code>step</code>은(는) 각 값에 더해지는 <code>duration</code> 값입니다.


## Examples

### Example #1 
정오(#time(12, 0, 0))에 시작하여 1시간씩 증가하는(#duration(0, 1, 0, 0)) 4개의 값을 포함하는 목록을 만듭니다.
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
