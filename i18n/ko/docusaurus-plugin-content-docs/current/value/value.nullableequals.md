---
title: Value.NullableEquals
---

# Value.NullableEquals


두 값이 같은지 여부를 반환합니다.


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Remarks

인수 `value1` 또는 `value2` 중 하나라도 null이면 null을 반환하고, 그렇지 않으면 Value.Equals와 동일한 값을 반환합니다.



## Category
Values
