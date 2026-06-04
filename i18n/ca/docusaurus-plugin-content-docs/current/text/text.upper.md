---
title: Text.Upper
---

# Text.Upper


Converteix tots els caràcters a majúscules.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retorna el resultat de convertir tots els caràcters del valor `text` a majúscules. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté la versió en majúscules de "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
