---
title: List.Modes
---

# List.Modes


목록에서 가장 자주 나타나는 값의 목록을 반환합니다.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

`list`에서 가장 자주 나타나는 항목을 반환합니다. 목록이 비어 있으면 오류가 발생합니다. 동일한 최대 빈도로 여러 항목이 표시되면 모든 항목이 반환됩니다. 같음 테스트를 제어하기 위해 선택적 비교 조건 값인 `equationCriteria`을(를) 지정할 수 있습니다.


## Examples

### Example #1
`{"A", 1, 2, 3, 3, 4, 5, 5}` 목록에서 가장 자주 나타나는 항목을 찾습니다.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
