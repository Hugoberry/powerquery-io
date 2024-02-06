---
title: Expression.Identifier
---

# Expression.Identifier


Возвращает представление идентификатора в исходном коде M.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Возвращает представление идентификатора <code>name</code> в исходном коде M.


## Examples

### Example #1 
Получить представление идентификатора в исходном коде M.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Получить представление идентификатора, содержащего пробел, в исходном коде M.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
