---
title: Expression.Constant
---

# Expression.Constant


## Description

Egy állandó érték M forráskód formátumú változatát adja vissza.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Egy állandó érték M forráskód formátumú változatát adja vissza.


## Examples

### Example #1 
Egy számérték M forráskód formátumú változatának lekérése.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Egy dátumérték M forráskód formátumú változatának lekérése.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Egy szöveges érték M forráskód formátumú változatának lekérése.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
