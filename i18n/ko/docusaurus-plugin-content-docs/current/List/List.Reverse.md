---
title: List.Reverse
---

# List.Reverse


## Description

목록에 있는 값의 순서를 반대로 바꿉니다.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

<code>list</code> 목록의 값이 역순으로 포함된 목록을 반환합니다.


## Examples

### Example #1 
\{1..10}의 값이 역순으로 포함된 목록을 만듭니다.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
