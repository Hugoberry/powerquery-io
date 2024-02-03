---
title: Text.Select
---

# Text.Select


## Description

Selecciona totes les aparicions del caràcter o la llista de caràcters especificats a partir del valor de text d&#39;entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Retorna una còpia del valor de text <code>text</code> amb tots els caràcters que no siguin a <code>selectChars</code> suprimits.  


## Examples

### Example #1 
Selecciona tots els caràcters en el rang de la &#34;a&#34; a la &#34;z&#34; del valor de text.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
