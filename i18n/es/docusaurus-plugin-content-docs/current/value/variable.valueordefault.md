---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Devuelve el valor de la variable especificada o el valor predeterminado si la variable no está definida.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Devuelve el valor de la variable `identifier` especificada definida por el entorno de evaluación actual. Si no se define la variable, se muestra el `defaultValue` opcional.



## Category
Values.Implementation
