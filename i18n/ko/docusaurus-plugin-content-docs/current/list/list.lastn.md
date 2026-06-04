---
title: List.LastN
---

# List.LastN


지정된 목록의 마지막 항목 또는 항목 목록을 반환합니다. 선택적으로 반환할 값의 수나 한정 조건을 지정할 수 있습니다.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

지정된 목록의 마지막 항목 또는 항목의 목록을 반환합니다.

-   `list`: 검사할 목록입니다. 목록이 비어 있으면 빈 목록이 반환됩니다.
-   `countOrCondition`: (선택 사항) 여러 항목 수집 또는 항목 필터링을 지원합니다. 이 매개 변수는 선택 사항으로 나열되지만 이 값이 제공되지 않았거나 `null`인 경우 오류가 발생합니다. 이 매개 변수는 두 가지 방법으로 지정할 수 있습니다.
    -   숫자를 지정하면 최대 해당 개수만큼 항목이 반환됩니다.
    -   조건을 지정하면 목록의 끝에서 시작하여 조건을 충족하는 모든 항목이 반환됩니다. 항목이 조건을 충족하지 못하면 더 이상 항목이 고려되지 않습니다.


## Examples

### Example #1
\{3, 4, 5, -1, 7, 8, 2\} 목록의 마지막 값을 찾습니다.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
\{3, 4, 5, -1, 7, 8, 2\} 목록에서 0보다 큰 마지막 값을 찾습니다.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
