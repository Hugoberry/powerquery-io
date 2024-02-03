---
title: List.Dates
---

# List.Dates


## Description

지정된 초기 값, 개수 및 증분 기간 값을 사용하여 date 값의 목록을 생성합니다.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code>에 시작하고 크기가 <code>count</code>인 <code>date</code> 값의 목록을 반환합니다. 지정된 증분 <code>step</code>은(는) 각 값에 더해지는 <code>duration</code> 값입니다.


## Examples

### Example #1 
섣달 그믐날(#date(2011, 12, 31))에 시작하여 1일씩 증가하는(#duration(1, 0, 0, 0)) 5개의 값을 포함하는 목록을 만듭니다.
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
