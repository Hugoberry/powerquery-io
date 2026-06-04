---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


서수 규칙을 사용하여 값을 비교하는 대/소문자 비구분 비교자 함수를 반환합니다.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

제공된 값 `x` 및 `y`을(를) 비교하기 위해 서수 규칙을 사용하는 대소문자를 구분하지 않는 비교자 함수를 반환합니다.  
  
비교자 함수는 두 개의 인수를 받아들이고 첫 번째 값이 두 번째 값보다 작은지, 같은지, 큰지에 따라 -1, 0 또는 1을 반환합니다.


## Examples

### Example #1
대/소문자 비구분 서수 규칙을 사용하여 "Abc"와 "abc"를 비교합니다. `Comparer.Ordinal`을 사용하는 경우 "Abc"가 "abc"보다 작습니다.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
