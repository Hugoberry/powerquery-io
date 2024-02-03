---
title: Text.Select
---

# Text.Select


## Description

Selecciona todas las coincidencias del carácter o de la lista de caracteres especificados del valor de texto de entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Devuelve una copia del valor de texto <code>text</code> con todos los caracteres que no estén en <code>selectChars</code> quitados.  


## Examples

### Example #1 
Selecciona todos los caracteres en un intervalo de la &#34;a&#34; a la &#34;z&#34; en el valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
