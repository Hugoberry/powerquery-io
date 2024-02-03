---
title: Expression.Constant
---

# Expression.Constant


## Description

Vraća reprezentaciju M izvornog koda vrednosti konstante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Vraća reprezentaciju M izvornog koda vrednosti konstante.


## Examples

### Example #1 
Preuzmite reprezentaciju M izvornog koda vrednosti broja.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Preuzmite reprezentaciju M izvornog koda vrednosti datuma.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Preuzmite reprezentaciju M izvornog koda tekstualne vrednosti.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
