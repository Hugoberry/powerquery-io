---
title: Text.Remove
---

# Text.Remove


## Description

Remove todas as ocorrências do caractere especificado ou da lista de caracteres no valor de texto de entrada.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Retorna uma cópia do valor de texto <code>text</code> com todos os caracteres na <code>removeChars</code> removida.  


## Examples

### Example #1 
Remova os caracteres , e ; do valor de texto.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
