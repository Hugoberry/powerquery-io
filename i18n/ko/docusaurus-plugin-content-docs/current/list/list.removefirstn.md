---
title: List.RemoveFirstN
---

# List.RemoveFirstN


목록의 처음부터 지정된 수만큼의 요소를 건너뛴 목록을 반환합니다.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

목록 `list`의 첫 번째 요소를 제거하는 목록을 반환합니다. `list`이(가) 빈 목록인 경우 빈 목록이 반환됩니다. 이 함수는 선택적 매개 변수 `countOrCondition`을(를) 사용하여 아래 나열된 여러 값 제거를 지원합니다.

-   숫자를 지정하면 해당 수만큼 항목이 제거됩니다.
-   조건이 지정되면 `list`의 시작에서 연속적으로 일치하는 항목이 제거됩니다.
-   이 매개 변수가 null이면 기본 동작이 관찰됩니다.


## Examples

### Example #1
\{1, 2, 3, 4, 5\}에서 처음 3개의 숫자를 제외한 목록을 만듭니다.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
\{5, 4, 2, 6, 1\}에서 3보다 작은 숫자로 시작되는 목록을 만듭니다.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
