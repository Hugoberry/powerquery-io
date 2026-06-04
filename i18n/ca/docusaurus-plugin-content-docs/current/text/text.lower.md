---
title: Text.Lower
---

# Text.Lower


Converteix tots els caràcters a minúscules.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retorna el resultat de convertir tots els caràcters del valor `text` a minúscules. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté la versió en minúscules de "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
