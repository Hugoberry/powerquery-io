---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Повертає представлення вихідного коду M ідентифікатора.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Повертає представлення вихідного коду M ідентифікатора <code>name</code>.


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
