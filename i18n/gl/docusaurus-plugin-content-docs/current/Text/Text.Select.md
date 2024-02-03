---
title: Text.Select
---

# Text.Select


## Description

Seleccione todas as ocorrencias do carácter indicado ou da lista de caracteres a partir do valor de entrada de texto.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Devolve unha copia do valor de texto <code>text</code> eliminados todos os caracteres non incluídos en <code>selectChars</code>.  


## Examples

### Example #1 
Seleccione todos os caracteres no intervalo de &#34;a&#34; a &#34;z&#34; do valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
