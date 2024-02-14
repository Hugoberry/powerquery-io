---
title: Expression.Constant
---

# Expression.Constant


किसी स्थिर मान का M स्रोत कोड प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

किसी स्थिर मान का M स्रोत कोड प्रस्तुतिकरण लौटाता है.


## Examples

### Example #1 
किसी सांख्यिक मान के M स्रोत कोड प्रस्तुतिकरण प्राप्त करें.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
किसी तिथि मान का M स्रोत कोड प्रस्तुतिकरण प्राप्त करें.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
किसी पाठ मान का M स्रोत कोड प्रस्तुतिकरण प्राप्त करें.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
