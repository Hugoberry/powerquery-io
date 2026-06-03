---
title: Value.NullableEquals
---

# Value.NullableEquals


Especifica se os dois valores são iguais.


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Remarks

Retornará nulo se o argumento `value1` ou `value2` for nulo, caso contrário, é equivalente a Value.Equals.



## Category
Values
