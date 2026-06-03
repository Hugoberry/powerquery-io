---
title: Text.Select
---

# Text.Select


Seleciona todas as ocorrências do caractere especificado ou da lista de caracteres no valor de texto de entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Retorna uma cópia do valor de texto `text` com todos os caracteres que não estão na `selectChars` removida.


## Examples

### Example #1
Selecione todos os caracteres no intervalo de 'a' a 'z' no valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
