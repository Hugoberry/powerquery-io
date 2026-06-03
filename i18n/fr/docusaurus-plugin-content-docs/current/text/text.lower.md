---
title: Text.Lower
---

# Text.Lower


Convertit tous les caractères en minuscules.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retourne le résultat de la conversion de tous les caractères en `text` en minuscules. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtient la version en minuscule de « AbCd ».
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
