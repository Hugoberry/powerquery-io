---
title: Expression.Identifier
---

# Expression.Identifier


Devolve a representação do código fonte M de um identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Devolve a representação do código fonte M de um identificador <code>name</code>.


## Examples

### Example #1 
Obter a representação do código fonte M de um identificador.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Obter a representação do código fonte M de um identificador que contém um espaço.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
