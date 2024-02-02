---
title: Expression.Constant
---

# Expression.Constant


## Description

Retourne la représentation en code source M d&#39;une valeur de constante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Retourne la représentation en code source M d'une valeur de constante.


## Examples

### Example #1 
Obtenir la représentation en code source M d&#39;une valeur numérique.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Obtenir la représentation en code source M d&#39;une valeur de date.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Obtenir la représentation en code source M d&#39;une valeur de texte.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
