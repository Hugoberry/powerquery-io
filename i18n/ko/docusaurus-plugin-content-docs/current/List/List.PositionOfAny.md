---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

목록에 있는 값의 첫 번째 오프셋을 반환합니다.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

<code>values</code> 목록에서 첫 번째로 나타나는 값의 <code>list</code> 목록 내 오프셋을 반환합니다. 찾을 수 없으면 -1을 반환합니다.    선택적 발생 매개 변수 <code>occurrence</code>을(를) 지정할 수 있습니다.<ul>   <li><code>occurrence</code>: 반환될 수 있는 발생 항목의 최대 개수입니다.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} 목록에서 2 또는 3 값이 나타나는 첫 번째 위치를 찾습니다.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
