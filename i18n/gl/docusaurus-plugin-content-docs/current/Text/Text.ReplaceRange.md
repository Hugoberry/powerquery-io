---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Elimina un intervalo de caracteres e insire un novo valor nunha posición especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Devolve o resultado de eliminar un número de caracteres, <code>count</code> do valor de texto <code>text</code> comezando na posición <code>offset</code> e logo insire o valor de texto <code>newText</code> na mesma posición en <code>text</code>.


## Examples

### Example #1 
Substituír un único carácter na posición 2 no valor de texto &#34;ABGF&#34; co novo valor de texto &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
