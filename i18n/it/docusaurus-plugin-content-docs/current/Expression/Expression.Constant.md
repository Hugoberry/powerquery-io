---
title: Expression.Constant
---

# Expression.Constant


## Description

Restituisce la rappresentazione del codice sorgente M di un valore costante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Restituisce la rappresentazione del codice sorgente M di un valore costante.


## Examples

### Example #1 
Ottiene la rappresentazione del codice sorgente M di un valore numerico.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Ottiene la rappresentazione del codice sorgente M di un valore di data.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Ottiene la rappresentazione del codice sorgente M di un valore di testo.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
