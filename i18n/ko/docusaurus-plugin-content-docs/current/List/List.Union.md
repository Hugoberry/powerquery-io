---
title: List.Union
---

# List.Union


## Description

입력에 있는 목록 값의 합집합을 반환합니다.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

목록의 목록 <code>lists</code>을(를) 인수로 받아 개별 목록에 있는 항목의 합집합을 구한 다음 출력 목록에 이를 반환합니다. 결과로 반환되는 목록에는 모든 입력 목록의 모든 항목이 포함됩니다.    이 작업은 일반적인 모음 의미 체계(Bag semantics)를 유지하므로 중복 값은 합집합의 일부로 일치됩니다.    선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
목록 \{1..5}, \{2..6}, \{3..7}의 합집합을 만듭니다.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
