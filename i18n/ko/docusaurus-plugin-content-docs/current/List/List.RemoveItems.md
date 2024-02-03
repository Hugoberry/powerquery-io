---
title: List.RemoveItems
---

# List.RemoveItems


## Description

목록1에서 목록에 있는 항목을 제거합니다.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

<code>list1</code>에서 <code>list2</code>에 나타나는 모든 특정 값을 제거합니다. <code>list2</code>의 값이 <code>list1</code>에 없으면 원래 목록이 반환됩니다.


## Examples

### Example #1 
\{1, 2, 3, 4, 2, 5, 5} 목록에서 \{2, 4, 6} 목록의 항목을 제거합니다.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
