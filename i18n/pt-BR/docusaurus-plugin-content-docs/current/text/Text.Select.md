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

Retorna uma cópia do valor de texto <code>text</code> com todos os caracteres que não estão na <code>selectChars</code> removida.  


## Examples

### Example #1 
Selecione todos os caracteres no intervalo de &#39;a&#39; a &#39;z&#39; no valor de texto.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
