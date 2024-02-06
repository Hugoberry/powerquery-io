---
title: Expression.Constant
---

# Expression.Constant


Returnerer M-kildekoderepræsentationen for en konstant værdi.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Returnerer M-kildekoderepræsentationen for en konstant værdi.


## Examples

### Example #1 
Download M-kildekoderepræsentationen af en talværdi.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Download M-kildekoderepræsentationen af en datoværdi.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Download M-kildekoderepræsentationen af en tekstværdi.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
