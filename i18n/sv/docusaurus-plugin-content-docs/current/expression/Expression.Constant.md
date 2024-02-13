---
title: Expression.Constant
---

# Expression.Constant


Returnerar M-källkodrepresentationen för ett konstantvärde.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Returnerar M-källkodrepresentationen för ett konstantvärde.


## Examples

### Example #1 
Hämta M-källkodsrepresentationen för ett nummervärde.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Hämta M-källkodsrepresentationen för ett datumvärde.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Hämta M-källkodsrepresentationen för ett textvärde.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
