---
title: Expression.Identifier
---

# Expression.Identifier


Devolve a representación de código fonte M dun identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Devolve a representación de código fonte M dun identificador `name`.


## Examples

### Example #1
Obter a representación de código fonte M dun identificador.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Obter a representación de código fonte M dun identificador que contén un espazo.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
