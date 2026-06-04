---
title: Text.Select
---

# Text.Select


Selecciona totes les aparicions del caràcter o la llista de caràcters especificats a partir del valor de text d'entrada.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Retorna una còpia del valor de text `text` amb tots els caràcters que no siguin a `selectChars` suprimits.


## Examples

### Example #1
Selecciona tots els caràcters en el rang de la "a" a la "z" del valor de text.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
