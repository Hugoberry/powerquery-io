---
title: Logical.ToText
---

# Logical.ToText


Devuelve el texto "true" or"false" dado un valor lógico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crea un valor de texto a partir del valor lógico `logicalValue`, ya sea `true` o `false`. Si `logicalValue` no es un valor lógico, se produce un error.


## Examples

### Example #1
Crear un valor de texto a partir del valor lógico `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
