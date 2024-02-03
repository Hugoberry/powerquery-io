---
title: Expression.Constant
---

# Expression.Constant


## Description

Atgriež konstantas vērtības M pirmkoda atveidojumu.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Atgriež konstantas vērtības M pirmkoda atveidojumu.


## Examples

### Example #1 
Iegūstiet skaitliskas vērtības M pirmkoda atveidojumu.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Iegūstiet datuma vērtības M pirmkoda atveidojumu.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Iegūstiet teksta vērtības M pirmkoda atveidojumu.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
