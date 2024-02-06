---
title: Text.Range
---

# Text.Range


Retourne une sous-chaîne trouvée au niveau du décalage.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retourne une sous-chaîne à partir du texte <code>text</code> trouvée au niveau du décalage <code>offset</code>.    Un paramètre facultatif, <code>count</code>, peut être inclus pour spécifier le nombre de caractères à retourner. Génère une erreur s'il n'y a pas suffisamment de caractères.


## Examples

### Example #1 
Recherche la sous-chaîne du texte &#34; Hello World &#34; en commençant à l&#39;index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Recherche la sous-chaîne du texte &#34; Hello World Hello &#34; en commençant à l&#39;index 6 et en fractionnant 5 caractères.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
