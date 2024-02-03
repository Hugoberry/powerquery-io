---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Retorna la representació del codi font M d&#39;un identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Retorna la representació del codi font M d'un identificador <code>name</code>.


## Examples

### Example #1 
Obteniu la representació del codi font M d&#39;un identificador.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Obteniu la representació del codi font M d&#39;un identificador que contingui un espai.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
