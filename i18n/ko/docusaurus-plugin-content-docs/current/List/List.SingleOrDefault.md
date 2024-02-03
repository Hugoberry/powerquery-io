---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

목록 길이가 1인 경우 단일 목록 항목을 반환하고, 빈 목록의 경우 기본값을 반환합니다.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

<code>list</code> 목록에 항목이 하나만 있는 경우 해당 항목을 반환합니다.    목록이 비어 있고 선택적 <code>default</code>이(가) 지정되어 있지 않은 경우 이 함수는 Null을 반환합니다. 목록에 항목이 둘 이상 있으면 이 함수는 오류를 반환합니다.


## Examples

### Example #1 
\{1} 목록의 단일 값을 찾습니다.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{} 목록의 단일 값을 찾습니다.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
\{} 목록의 단일 값을 찾습니다. 목록이 비어 있으면 -1을 반환합니다.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
