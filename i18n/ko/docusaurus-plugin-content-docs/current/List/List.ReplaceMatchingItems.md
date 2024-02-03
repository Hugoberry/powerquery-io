---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

\{ old, new }의 각 바꾸기를 적용합니다.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list</code> 목록에 대해 지정된 바꾸기를 수행합니다. 바꾸기 작업 <code>replacements</code>은(는) 두 개의 값으로 된 목록으로 구성되며, 각 목록에서 이전 값과 새 값이 제공됩니다.    선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다.


## Examples

### Example #1 
\{1, 2, 3, 4, 5}에서 값 5를 -5로 바꾸고 값 1은 -1로 바꾼 목록을 만듭니다.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
