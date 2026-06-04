---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Suprimeix un interval de caràcters i insereix un valor nou en una posició especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Retorna el resultat de suprimir un nombre de caràcters, `count`, del valor de text `text` començant per la posició `offset` i després insereix el valor de text `newText` a la mateixa posició a `text`.


## Examples

### Example #1
Substitueix un única caràcter a la posició 2 del valor de text "ABGF" amb el valor de text nou "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
