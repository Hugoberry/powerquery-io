---
title: List.Product
---

# List.Product


목록에 있는 숫자의 곱을 반환합니다.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

`numbersList` 목록에 있는 Null이 아닌 숫자의 곱을 반환합니다. 목록에 Null이 아닌 값이 없으면 Null을 반환합니다.


## Examples

### Example #1
`{1, 2, 3, 3, 4, 5, 5}` 목록에 있는 숫자의 곱을 확인합니다.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
