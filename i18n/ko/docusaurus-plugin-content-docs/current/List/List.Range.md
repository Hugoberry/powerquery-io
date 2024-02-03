---
title: List.Range
---

# List.Range


## Description

오프셋에서 시작하는 목록 하위 집합을 반환합니다.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

오프셋 <code>list</code>에서 시작하는 목록 하위 집합을 반환합니다. 선택적 매개 변수 <code>offset</code>은(는) 하위 집합의 최대 항목 수를 설정합니다.


## Examples

### Example #1 
숫자 1부터 10지 포함된 목록에서 오프셋 6부터 시작하는 하위 집합을 찾습니다.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
숫자 1부터 10까지 포함된 목록에서 오프셋 6부터 시작하고 길이가 2인 하위 집합을 찾습니다.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
