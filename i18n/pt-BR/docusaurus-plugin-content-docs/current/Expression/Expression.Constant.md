---
title: Expression.Constant
---

# Expression.Constant


Retorna a representação do código-fonte M de um valor constante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Retorna a representação do código-fonte M de um valor constante.


## Examples

### Example #1 
Obter a representação do código-fonte M de um valor numérico.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Obter a representação do código-fonte M de um valor de data.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Obter a representação do código-fonte M de um valor de texto.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
