---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Suprimeix un recompte de caràcters començant per desplaçament donat.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Retorna una còpia del valor de text <code>text</code> amb tots els caràcters des de la posició <code>offset</code> suprimits.    Es pot utilitzar un paràmetre opcional <code>count</code> per especificar el nombre de caràcters que s'han de suprimir. El valor per defecte de <code>count</code> és 1. Els valors de posició comencen per 0.


## Examples

### Example #1 
Suprimeix 1 caràcter del valor de text &#34;ABEFC&#34; a la posició 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Suprimeix dos caràcters del valor de text &#34;ABEFC&#34; començant per la posició 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
