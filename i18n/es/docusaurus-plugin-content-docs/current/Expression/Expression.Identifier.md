---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Devuelve la representación del código fuente M de un identificador.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Devuelve la representación del código fuente M de un identificador <code>name</code>.


## Examples

### Example #1 
Obtenga la representación del código fuente M de un identificador.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Obtenga la representación del código fuente M de un identificador que contenga un espacio.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
