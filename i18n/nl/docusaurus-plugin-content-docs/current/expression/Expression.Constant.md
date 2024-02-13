---
title: Expression.Constant
---

# Expression.Constant


Hiermee wordt de M-broncodeweergave van een constante waarde geretourneerd.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Hiermee wordt de M-broncodeweergave van een constante waarde geretourneerd.


## Examples

### Example #1 
De M-broncodeweergave van een getalwaarde ophalen.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
De M-broncodeweergave van een datumwaarde ophalen.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
De M-broncodeweergave van een tekstwaarde ophalen.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
