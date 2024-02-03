---
title: List.Last
---

# List.Last


## Description

목록의 마지막 값을 반환하거나, 목록이 비어 있는 경우 지정된 기본값을 반환합니다.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

<code>list</code> 목록의 마지막 항목을 반환하거나, 목록이 비어 있는 경우 선택적으로 지정된 기본값 <code>defaultValue</code>을(를) 반환합니다.    목록이 비어 있고 기본값이 지정되어 있지 않은 경우 이 함수는 <code>null</code>을 반환합니다.


## Examples

### Example #1 
\{1, 2, 3} 목록의 마지막 값을 찾습니다.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
\{} 목록의 마지막 값을 찾습니다. 목록이 비어 있으면 -1입니다.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
