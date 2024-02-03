---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Devolve a representación de código fonte M dun identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Devolve a representación de código fonte M dun identificador <code>name</code>.


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
