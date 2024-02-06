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

如果任一参数“<code>value1</code>”或“<code>value2</code>”为 Null，则返回 Null，否则等同于 Value.Equals。



## Category
Values
