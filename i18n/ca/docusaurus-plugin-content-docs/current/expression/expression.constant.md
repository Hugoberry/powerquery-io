---
title: Expression.Constant
---

# Expression.Constant


Retorna la representació del codi font M d'un valor constant.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Retorna la representació del codi font M d'un valor constant.


## Examples

### Example #1
Obteniu la representació del codi font M d'un valor numèric.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2
Obteniu la representació del codi font M d'un valor de data.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3
Obteniu la representació del codi font M d'un valor de text.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
