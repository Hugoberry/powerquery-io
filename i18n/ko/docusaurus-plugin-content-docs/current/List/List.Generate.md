---
title: List.Generate
---

# List.Generate


## Description

값 목록을 생성합니다.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

제공된 함수를 사용하여 값 목록을 생성합니다. <code>initial</code> 함수는 시작 후보 값을 생성한 다음 <code>condition</code>에 대해 테스트합니다.    후보 값이 승인되면 결과 목록의 일부로 반환되고 새로 승인된 값을 <code>next</code>(으)로 전달하여 다음 후보 값이 생성됩니다.    후보 값이 <code>condition</code>에 일치하지 못하면 목록 생성 프로세스가 중지됩니다.    결과 목록의 항목을 변환하는 선택적 매개 변수(<code>selector</code>)도 제공할 수 있습니다.


## Examples

### Example #1 
10시에서 시작하여 반복적으로 1씩 감소하고 각 항목이 0보다 큰지 확인하여 목록을 만듭니다.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
x는 값이고 y는 목록인 x 및 y를 포함하는 레코드 목록을 생성합니다. x는 10 미만이어야 하고 목록 y의 항목 수를 나타냅니다. 목록이 생성되면 x 값만 반환합니다.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
