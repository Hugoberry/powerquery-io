---
title: Number.Combinations
---

# Number.Combinations


고유 조합의 수를 반환합니다.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

항목 목록 `setSize`에서 지정된 조합 크기 `combinationSize`과(와) 일치하는 고유 조합의 수를 반환합니다.

-   `setSize`: 목록의 항목 수입니다.
-   `combinationSize`: 각 조합의 항목 수입니다.


## Examples

### Example #1
각 조합이 그룹 3일 때 총 5개 항목에서 조합 수를 확인합니다.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
