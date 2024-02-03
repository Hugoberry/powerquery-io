---
title: Expression.Constant
---

# Expression.Constant


## Description

Returnează reprezentarea codului sursă M a unei valori constante.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Returnează reprezentarea codului sursă M a unei valori constante.


## Examples

### Example #1 
Obțineți reprezentarea codului sursă M pentru o valoare numerică.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Obțineți reprezentarea codului sursă M pentru o valoare dată.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Obțineți reprezentarea codului sursă M a unei valori text.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
