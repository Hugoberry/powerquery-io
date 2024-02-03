---
title: List.PositionOf
---

# List.PositionOf


## Description

목록에 있는 값의 오프셋을 반환합니다.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

<code>list</code> 목록에서 <code>value</code> 값이 나타나는 오프셋을 반환합니다. 해당 값이 나타나지 않으면 -1을 반환합니다.    선택적 발생 매개 변수 <code>occurrence</code>을(를) 지정할 수 있습니다.<ul>   <li><code>occurrence</code>: 보고할 발생 항목의 최대 개수입니다.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} 목록에서 3 값이 나타나는 위치를 찾습니다.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
