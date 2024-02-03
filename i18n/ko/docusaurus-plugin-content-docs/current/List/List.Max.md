---
title: List.Max
---

# List.Max


## Description

최대값을 반환하거나, 빈 목록의 경우 기본값을 반환합니다.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

<code>list</code> 목록의 최대 항목을 반환하거나, 목록이 비어 있는 경우 선택적으로 지정된 기본값 <code>default</code>을(를) 반환합니다.    선택적 comparisonCriteria 값 <code>comparisonCriteria</code>을(를) 지정하여 목록의 항목을 비교할 방법을 결정할 수 있습니다. 이 매개 변수가 Null이면 기본 비교자가 사용됩니다.


## Examples

### Example #1 
\{1, 4, 7, 3, -2, 5} 목록의 최대값을 찾습니다.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
\{} 목록의 최대값을 찾습니다. 목록이 비어 있으면 -1을 반환합니다. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
