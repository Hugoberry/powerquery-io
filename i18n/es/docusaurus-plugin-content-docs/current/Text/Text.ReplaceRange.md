---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Quita un intervalo de caracteres e inserta un nuevo valor en la posición especificada.


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

Devuelve el resultado de quitar varios caracteres, <code>count</code>, del valor de texto <code>text</code> a partir de la posición <code>offset</code> y después de insertar el valor de texto <code>newText</code> en la misma posición en <code>text</code>.


## Examples

### Example #1 
Reemplazar un solo carácter en la posición 2 en el valor de texto &#34;ABGF&#34; con el nuevo valor de texto &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
