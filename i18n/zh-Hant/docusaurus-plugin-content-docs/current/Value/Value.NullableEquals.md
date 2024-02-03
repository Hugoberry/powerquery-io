---
title: Value.NullableEquals
---

# Value.NullableEquals


## Description

傳回兩個值是否相等。


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Details

如果任何一個引數 '<code>value1</code>', '<code>value2</code>' 是 Null，則傳回 Null，否則傳回 Value.Equals 的對等值。



## Category
Values
