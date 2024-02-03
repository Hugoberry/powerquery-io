---
title: List.Numbers
---

# List.Numbers


## Description

지정된 초기 값, 개수 및 선택적 증분 값을 사용하여 숫자의 목록을 반환합니다.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

지정된 초기 값, 개수 및 선택적 증분 값을 사용하여 숫자의 목록을 반환합니다. 기본 증분 값은 1입니다.<ul>   <li><code>start</code>: 목록의 초기 값입니다.</li>   <li><code>count</code>: 만들 값의 수입니다.</li>   <li><code>increment</code>: <i>[옵션]</i> 증분 단위 값입니다. 생략할 경우 값이 1씩 증가합니다.</li></ul>


## Examples

### Example #1 
1에서 시작하여 연속 10개의 숫자가 포함된 목록을 생성합니다.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
1에서 시작하여 각 후속 숫자마다 2씩 증가하는 10개의 숫자가 포함된 목록을 생성합니다.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
