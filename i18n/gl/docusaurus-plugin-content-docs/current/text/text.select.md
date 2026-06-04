---
title: Text.Select
---

# Text.Select


Seleccione todas as ocorrencias do carácter indicado ou da lista de caracteres a partir do valor de entrada de texto.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Devolve unha copia do valor de texto `text` eliminados todos os caracteres non incluídos en `selectChars`.


## Examples

### Example #1
Seleccione todos os caracteres no intervalo de "a" a "z" do valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
