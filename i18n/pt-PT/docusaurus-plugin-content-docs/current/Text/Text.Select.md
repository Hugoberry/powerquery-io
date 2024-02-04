---
title: Text.Select
---

# Text.Select


## Description

Seleciona todas as ocorrências do caráter ou da lista de carateres fornecida do valor de texto de entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Devolve uma cópia do valor de texto <code>text</code> com todos os carateres que não estejam em <code>selectChars</code> removidos.  


## Examples

### Example #1 
Selecione todos os carateres no intervalo de &#34;a&#34; a &#34;z&#34; do valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
