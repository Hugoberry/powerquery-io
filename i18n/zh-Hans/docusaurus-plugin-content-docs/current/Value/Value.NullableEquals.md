---
title: Value.NullableEquals
---

# Value.NullableEquals


返回两个值是否相等。


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Remarks

如果参数 `value1` 或 `value2` 为 null，则返回 null，否则等效于 Value.Equals。



## Category
Values
