---
title: Text.Replace
---

# Text.Replace


## Description

Reemplaza todas las coincidencias de la subcadena dada en el texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Devuelve el resultado de reemplazar las coincidencias del valor de texto <code>old</code> en el valor de texto <code>text</code> con el valor de texto <code>new</code>. Esta función distingue mayúsculas y minúsculas.


## Examples

### Example #1 
Reemplazar cada coincidencia de &#34;el&#34; en una frase con &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
