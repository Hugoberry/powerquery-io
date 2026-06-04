---
title: List.MinN
---

# List.MinN


목록의 최소값을 반환합니다. 반환할 값의 수나 필터링 조건을 지정할 수 있습니다.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

목록의 최소값 `list`을(를) 반환합니다. `countOrCondition` 매개 변수는 반환할 값의 수나 필터링 조건을 지정합니다. 선택적 매개 변수 `comparisonCriteria`은(는) 목록의 값을 비교할 방법을 지정합니다.

-   `list`: 값의 목록입니다.
-   `countOrCondition`: 숫자가 지정되면 최대 `countOrCondition` 항목의 목록이 오름차순으로 반환됩니다. 조건을 지정하면 처음에 조건을 충족하는 항목의 목록이 반환됩니다. 하나의 항목이 조건에 실패하면 추가 항목이 고려되지 않습니다. 이 매개 변수가 null이면 목록에서 가장 작은 단일 값이 반환됩니다.
-   `comparisonCriteria`: *(선택 사항)* 선택적 `comparisonCriteria` 값을 지정하여 목록의 항목을 비교하는 방법을 결정할 수 있습니다. 이 매개 변수가 null이면 기본 비교자가 사용됩니다.


## Examples

### Example #1
`{3, 4, 5, -1, 7, 8, 2}` 목록에서 가장 작은 5개의 값을 찾습니다.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
