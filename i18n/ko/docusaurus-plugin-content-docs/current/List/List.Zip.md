---
title: List.Zip
---

# List.Zip


## Description

여러 목록의 동일한 위치에 있는 항목을 결합하여 목록의 목록을 반환합니다.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

목록의 목록 <code>lists</code>을(를) 가져오고 동일한 위치의 항목을 결합한 목록의 목록을 반환합니다.


## Examples

### Example #1 
두 개의 일반 목록 \{1, 2} 및 \{3, 4}을(를) 압축합니다.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
서로 다른 길이의 두 일반 목록 \{1, 2} 및 \{3}을(를) 압축합니다.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
