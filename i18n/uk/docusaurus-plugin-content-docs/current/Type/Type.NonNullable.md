---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Повертає тип, який не підтримує пусті значення, з типу.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Повертає тип, який не належить до типу <code>nullable</code>, з типу <code>type</code>.


## Examples

### Example #1 
Повернути тип, який не підтримує пусті значення, з типу &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
