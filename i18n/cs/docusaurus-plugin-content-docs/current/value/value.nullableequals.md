---
title: Value.NullableEquals
---

# Value.NullableEquals


Zjistí, zda jsou si dvě hodnoty rovny.


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Remarks

Pokud má některý z argumentů `value1` nebo `value2` hodnotu null, vrátí hodnotu null. Jinak vrátí hodnotu odpovídají hodnotě Value.Equals.



## Category
Values
