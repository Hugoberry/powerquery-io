---
title: Expression.Identifier
---

# Expression.Identifier


Retorna la representació del codi font M d'un identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Retorna la representació del codi font M d'un identificador `name`.


## Examples

### Example #1
Obteniu la representació del codi font M d'un identificador.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Obteniu la representació del codi font M d'un identificador que contingui un espai.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
