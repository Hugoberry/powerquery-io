---
title: List.Last
---

# List.Last


목록의 마지막 값을 반환하거나, 목록이 비어 있는 경우 지정된 기본값을 반환합니다.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

지정된 목록의 마지막 항목을 반환하거나 목록이 비어 있는 경우 선택적 기본값을 반환합니다.

-   `list`: 검사할 목록입니다.
-   `defaultValue`: (선택 사항) 목록이 비어 있는 경우 반환할 기본값입니다. 목록이 비어 있고 기본값이 지정되지 않은 경우 함수는 `null`을 반환합니다.


## Examples

### Example #1
\{1, 2, 3\} 목록의 마지막 값을 찾습니다.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
\{\} 목록의 마지막 값을 찾습니다. 목록이 비어 있으면 -1입니다.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
