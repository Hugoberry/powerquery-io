---
title: Expression.Constant
---

# Expression.Constant


## Description

Повертає представлення вихідного коду M постійного значення.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Повертає представлення вихідного коду M постійного значення.


## Examples

### Example #1 
Отримайте представлення вихідного коду M числового значення.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Отримайте представлення вихідного коду M значення дати.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Отримайте представлення вихідного коду M текстового значення.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
