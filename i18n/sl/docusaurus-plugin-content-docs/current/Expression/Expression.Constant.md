---
title: Expression.Constant
---

# Expression.Constant


## Description

Vrne predstavitev izvorne kode M vrednosti konstante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Vrne predstavitev izvorne kode M vrednosti konstante.


## Examples

### Example #1 
Pridobite predstavitev izvorne kode M številske vrednosti.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Pridobite predstavitev izvorne kode M datumske vrednosti.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Pridobite predstavitev izvorne kode M besedilne vrednosti.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
