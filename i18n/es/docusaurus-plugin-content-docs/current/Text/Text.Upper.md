---
title: Text.Upper
---

# Text.Upper


## Description

Convierte todos los caracteres en mayúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Devuelve el resultado de convertir todos los caracteres de <code>text</code> en mayúsculas. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener la versión en mayúsculas de &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
