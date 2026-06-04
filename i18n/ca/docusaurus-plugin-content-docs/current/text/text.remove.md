---
title: Text.Remove
---

# Text.Remove


Suprimeix totes les aparicions del caràcter o la llista de caràcters donats a partir del valor de text d'entrada.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Retorna una còpia del valor de text `text` amb tots els caràcters des de `removeChars` suprimits.


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
