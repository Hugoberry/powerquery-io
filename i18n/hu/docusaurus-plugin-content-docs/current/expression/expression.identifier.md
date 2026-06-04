---
title: Expression.Identifier
---

# Expression.Identifier


Egy azonosító M forráskód formátumú változatát adja vissza.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Egy azonosító (`name`) M forráskód formátumú változatát adja vissza.


## Examples

### Example #1
Egy azonosító M forráskód formátumú változatának lekérése.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Szóközt tartalmazó azonosító M forráskód formátumú változatának lekérése.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
