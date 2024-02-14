---
title: Text.Clean
---

# Text.Clean


Retorna o valor de texto com todos os caracteres de controle removidos.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Retorna um valor de texto com todos os caracteres de controle de <code>text</code> removidos.


## Examples

### Example #1 
Remover os feeds de linha e outros caracteres de controle de um valor de texto.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
