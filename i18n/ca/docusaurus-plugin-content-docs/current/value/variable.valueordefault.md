---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Retorna el valor de la variable especificada o el valor per defecte si la variable no està definida.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Retorna el valor de la variable especificada `identifier` definida per l'entorn d'avaluació actual. Si no s'ha definit la variable, es retornarà `defaultValue` opcional.



## Category
Values.Implementation
