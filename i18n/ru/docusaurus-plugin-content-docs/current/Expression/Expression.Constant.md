---
title: Expression.Constant
---

# Expression.Constant


## Description

Возвращает представление константного значения в исходном коде M.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Возвращает представление константного значения в исходном коде M.


## Examples

### Example #1 
Получить представление числового значения в исходном коде M.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Получить представление значения даты в исходном коде M.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Получить представление текстового значения в исходном коде M.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
