---
title: Expression.Constant
---

# Expression.Constant


## Description

Palauttaa vakioarvon M-lähdekoodiesityksen.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Palauttaa vakioarvon M-lähdekoodiesityksen.


## Examples

### Example #1 
Hae lukuarvon M-lähdekoodiesitys.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Hae päivämääräarvon M-lähdekoodiesitys.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Hae tekstiarvon M-lähdekoodiesitys.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
