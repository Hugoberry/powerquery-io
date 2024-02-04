---
title: Text.Remove
---

# Text.Remove


## Description

Remove todas as ocorrências do caráter ou da lista de carateres especificada do valor de texto de entrada.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Devolve uma cópia do valor de texto <code>text</code> com todos os carateres de <code>removeChars</code> removidos.  


## Examples

### Example #1 
Remover os carateres , e ; do valor de texto.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
