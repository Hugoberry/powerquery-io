---
title: List.RemoveLastN
---

# List.RemoveLastN


목록의 끝부터 지정된 수만큼의 요소를 제거한 목록을 반환합니다.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

목록 `list`의 끝에서 마지막 `countOrCondition`개 요소를 제거하는 목록을 반환합니다. `list`이(가) `countOrCondition` 요소보다 작은 경우 빈 목록이 반환됩니다.

-   숫자를 지정하면 해당 수만큼 항목이 제거됩니다.
-   조건이 지정되면 `list`의 끝에서 연속적으로 일치하는 항목이 제거됩니다.
-   이 매개 변수가 null이면 하나의 항목만 제거됩니다.


## Examples

### Example #1
\{1, 2, 3, 4, 5\}에서 마지막 3개의 숫자를 제외한 목록을 만듭니다.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
\{5, 4, 2, 6, 4\}에서 3보다 작은 숫자로 끝나는 목록을 만듭니다.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
