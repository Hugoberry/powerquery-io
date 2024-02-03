---
title: Value.NullableEquals
---

# Value.NullableEquals


## Description

Zjistí, zda jsou si dvě hodnoty rovny.


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Details

Pokud má některý z argumentů <code>value1</code> a <code>value2</code> hodnotu null, vrátí hodnotu null. Jinak vrátí hodnotu odpovídají hodnotě Value.Equals.



## Category
Values
