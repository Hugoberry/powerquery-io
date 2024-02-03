---
title: Expression.Constant
---

# Expression.Constant


## Description

Pateikia konstantos reikšmės M šaltinio kodo atvaizdavimą.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Pateikia konstantos reikšmės M šaltinio kodo atvaizdavimą.


## Examples

### Example #1 
Gaukite skaičiaus reikšmės M šaltinio kodo atvaizdavimą.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Gaukite datos reikšmės M šaltinio kodo atvaizdavimą.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Gaukite tekstinės reikšmės M šaltinio kodo atvaizdavimą.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
