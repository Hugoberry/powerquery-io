---
title: Text.Upper
---

# Text.Upper


Convierte todos los caracteres en mayúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devuelve el resultado de convertir todos los caracteres de `text` en mayúsculas. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener la versión en mayúsculas de "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
