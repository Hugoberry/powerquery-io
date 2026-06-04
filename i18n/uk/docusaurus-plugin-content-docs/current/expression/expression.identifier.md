---
title: Expression.Identifier
---

# Expression.Identifier


Повертає представлення вихідного коду M ідентифікатора.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Повертає представлення вихідного коду M ідентифікатора `name`.


## Examples

### Example #1
Отримайте представлення вихідного коду M ідентифікатора.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Отримайте представлення вихідного коду M ідентифікатора, який містить пробіл.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
