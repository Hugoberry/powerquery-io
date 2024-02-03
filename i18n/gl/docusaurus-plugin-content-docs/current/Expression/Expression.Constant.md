---
title: Expression.Constant
---

# Expression.Constant


## Description

Devolve a representación de código fonte M dun valor constante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Devolve a representación de código fonte M dun valor constante.


## Examples

### Example #1 
Obter a representación de código fonte M dun valor de número.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Obter a representación de código fonte M dun valor de data.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Obter a representación de código fonte M dun valor de texto.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
