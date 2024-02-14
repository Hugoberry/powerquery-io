---
title: Expression.Constant
---

# Expression.Constant


Gibt die M-Quellcodedarstellung eines konstanten Werts zurück.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Gibt die M-Quellcodedarstellung eines konstanten Werts zurück.


## Examples

### Example #1 
Hiermit wird die M-Quellcodedarstellung eines Zahlenwerts abgerufen.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Hiermit wird die M-Quellcodedarstellung eines Datumswerts abgerufen.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Hiermit wird die M-Quellcodedarstellung eines Textwerts abgerufen.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
