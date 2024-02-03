---
title: List.IsEmpty
---

# List.IsEmpty


## Description

목록이 비어 있으면 true를 반환합니다.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

<code>list</code> 목록에 값이 포함되어 있지 않으면(길이 0) <code>true</code>를 반환합니다. 목록에 값이 포함되어 있으면(길이 > 0) <code>false</code>를 반환합니다.


## Examples

### Example #1 
\{} 목록이 비어 있는지 확인합니다.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2} 목록이 비어 있는지 확인합니다.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
