---
title: Text.Select
---

# Text.Select


Selecciona todas las coincidencias del carácter o de la lista de caracteres especificados del valor de texto de entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Devuelve una copia del valor de texto `text` con todos los caracteres que no estén en `selectChars` quitados.


## Examples

### Example #1
Selecciona todos los caracteres en un intervalo de la "a" a la "z" en el valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
