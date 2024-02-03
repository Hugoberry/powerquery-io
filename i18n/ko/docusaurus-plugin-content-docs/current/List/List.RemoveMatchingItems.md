---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

입력 값과 일치하는 모든 값을 제거합니다.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list1</code> 목록에서 <code>list2</code>에 나타나는 모든 특정 값을 제거합니다. <code>list2</code>의 값이 <code>list1</code>에 없으면 원래 목록이 반환됩니다.    선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5, 5}에서 \{1, 5}를 제외한 목록을 만듭니다.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
