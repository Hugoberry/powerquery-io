---
title: Expression.Constant
---

# Expression.Constant


## Description

Vrátí reprezentaci zdrojového kódu M konstantní hodnoty.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Vrátí reprezentaci zdrojového kódu M konstantní hodnoty.


## Examples

### Example #1 
Získá reprezentaci zdrojového kódu M číselné hodnoty.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Získá reprezentaci zdrojového kódu M hodnoty data.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Získá reprezentaci zdrojového kódu M textové hodnoty.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
