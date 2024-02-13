---
title: Text.RemoveRange
---

# Text.RemoveRange


Supprime un nombre de caractères en commençant au décalage donné


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retourne une copie d'une valeur de texte <code>text</code> en supprimant tous les caractères à partir de la position <code>offset</code>.    Un paramètre facultatif <code>count</code> peut être utilisé pour spécifier le nombre de caractères à supprimer. La valeur par défaut de <code>count</code> est 1. Les valeurs de position commencent à 0.


## Examples

### Example #1 
Supprime 1 caractère de la valeur de texte &#34; ABEFC &#34;, à la position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Supprime 2 caractères de la valeur de texte &#34; ABEFC &#34;, en démarrant à la position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
