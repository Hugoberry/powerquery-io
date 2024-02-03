---
title: Text.Remove
---

# Text.Remove


## Description

Suprimeix totes les aparicions del caràcter o la llista de caràcters donats a partir del valor de text d&#39;entrada.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Retorna una còpia del valor de text <code>text</code> amb tots els caràcters des de <code>removeChars</code> suprimits.  


## Examples

### Example #1 
Suprimeix els caràcters , i ; del valor de text.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
