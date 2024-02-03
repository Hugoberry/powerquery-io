---
title: Text.Clean
---

# Text.Clean


## Description

Devolve o valor de texto con todos os caracteres de control eliminados.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Devolve un valor de texto con todos os caracteres de control de <code>text</code> eliminados.


## Examples

### Example #1 
Elimine os avances de liña e outros caracteres de control dun valor de texto.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
