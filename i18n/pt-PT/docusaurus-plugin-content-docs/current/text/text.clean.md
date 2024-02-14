---
title: Text.Clean
---

# Text.Clean


Devolve o valor de texto com todos os carateres de controlo removidos.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Devolve um valor de texto com todos os carateres de controlo de <code>text</code> removidos.


## Examples

### Example #1 
Remover avanços de linha e outros carateres de controlo de um valor de texto.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
