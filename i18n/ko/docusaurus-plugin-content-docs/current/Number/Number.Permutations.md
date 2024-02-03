---
title: Number.Permutations
---

# Number.Permutations


## Description

순열 수를 반환합니다.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

지정된 순열 크기 <code>permutationSize</code>(으)로 항목 수 <code>setSize</code>개에서 생성할 수 있는 순열의 수를 반환합니다.


## Examples

### Example #1 
3개 그룹의 총 5개 항목에서 순열의 수를 확인합니다.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
