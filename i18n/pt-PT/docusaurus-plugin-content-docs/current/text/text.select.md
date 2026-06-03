---
title: Text.Select
---

# Text.Select


Seleciona todas as ocorrências do caráter ou da lista de carateres fornecida do valor de texto de entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Devolve uma cópia do valor de texto `text` com todos os carateres que não estejam em `selectChars` removidos.


## Examples

### Example #1
Selecione todos os carateres no intervalo de "a" a "z" do valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
