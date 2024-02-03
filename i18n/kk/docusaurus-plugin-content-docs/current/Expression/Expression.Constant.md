---
title: Expression.Constant
---

# Expression.Constant


## Description

Тұрақты мәннің M бастапқы коды көрінісін қайтарады.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Тұрақты мәннің M бастапқы коды көрінісін қайтарады.


## Examples

### Example #1 
Сандық мәннің M бастапқы коды көрінісін алыңыз.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Күн мәнінің M бастапқы коды көрінісін алыңыз.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Мәтін мәнінің M бастапқы коды көрінісін алыңыз.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
