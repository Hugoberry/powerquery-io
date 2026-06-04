---
title: Text.RemoveRange
---

# Text.RemoveRange


Suprimeix un recompte de caràcters començant per desplaçament donat.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retorna una còpia del valor de text `text` amb tots els caràcters des de la posició `offset` suprimits. Es pot utilitzar un paràmetre opcional `count` per especificar el nombre de caràcters que s'han de suprimir. El valor per defecte de `count` és 1. Els valors de posició comencen per 0.


## Examples

### Example #1
Suprimeix 1 caràcter del valor de text "ABEFC" a la posició 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Suprimeix dos caràcters del valor de text "ABEFC" començant per la posició 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
