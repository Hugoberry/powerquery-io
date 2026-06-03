---
title: Expression.Identifier
---

# Expression.Identifier


Retourne la représentation en code source M d'un identificateur.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Retourne la représentation en code source M d'un identificateur `name`.


## Examples

### Example #1
Obtenir la représentation en code source M d'un identificateur.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Obtenir la représentation en code source M d'un identificateur contenant un espace.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
