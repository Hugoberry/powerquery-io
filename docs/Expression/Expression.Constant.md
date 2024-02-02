---
title: Expression.Constant
---

# Expression.Constant


## Description

Returns the M source code representation of a constant value.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Returns the M source code representation of a constant value.


## Examples

### Example #1 
Get the M source code representation of a number value.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Get the M source code representation of a date value.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Get the M source code representation of a text value.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
