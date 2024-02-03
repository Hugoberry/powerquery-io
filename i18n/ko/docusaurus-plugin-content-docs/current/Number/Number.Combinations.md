---
title: Number.Combinations
---

# Number.Combinations


## Description

고유 조합의 수를 반환합니다.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

항목 목록 <code>setSize</code>에서 지정된 조합 크기 <code>combinationSize</code>과(와) 일치하는 고유 조합의 수를 반환합니다.<ul>    <li><code>setSize</code>: 목록의 항목 수입니다.</li>    <li><code>combinationSize</code>: 각 조합의 항목 수입니다.</li></ul>


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
