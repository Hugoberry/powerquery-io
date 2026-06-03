---
title: Text.Replace
---

# Text.Replace


Reemplaza todas las coincidencias de la subcadena dada en el texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Devuelve el resultado de reemplazar las coincidencias del valor de texto `old` en el valor de texto `text` con el valor de texto `new`. Esta función distingue mayúsculas y minúsculas.


## Examples

### Example #1
Reemplazar cada coincidencia de "el" en una frase con "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
