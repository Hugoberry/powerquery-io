---
title: Expression.Constant
---

# Expression.Constant


## Description

Devuelve la representación del código fuente M de un valor constante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Devuelve la representación del código fuente M de un valor constante.


## Examples

### Example #1 
Obtenga la representación del código fuente M de un valor numérico.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Obtenga la representación del código fuente M de un valor de fecha.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Obtenga la representación del código fuente M de un valor de texto.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
