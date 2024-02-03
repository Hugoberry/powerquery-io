---
title: Expression.Constant
---

# Expression.Constant


## Description

Vráti zobrazenie zdrojového kódu M konštantnej hodnoty.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Vráti zobrazenie zdrojového kódu M konštantnej hodnoty.


## Examples

### Example #1 
Získa zobrazenie zdrojového kódu M číselnej hodnoty.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Získa zobrazenie zdrojového kódu M hodnoty dátumu.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Získa zobrazenie zdrojového kódu M textovej hodnoty.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
