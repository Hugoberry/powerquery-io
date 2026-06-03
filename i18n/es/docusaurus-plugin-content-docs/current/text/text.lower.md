---
title: Text.Lower
---

# Text.Lower


Convierte todos los caracteres a minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devuelve el resultado de convertir todos los caracteres de `text` en minúsculas. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener la versión en minúsculas de "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
