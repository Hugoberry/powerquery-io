---
title: Text.Middle
---

# Text.Middle


Retourne la sous-chaîne jusqu'à une longueur spécifique.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Retourne `count` caractères, ou jusqu'à la fin de `text`, au décalage `start`.


## Examples

### Example #1
Rechercher la sous-chaîne du texte « Hello World » en commençant à l'index 6 et en fractionnant 5 caractères.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Rechercher la sous-chaîne du texte « Hello World » en commençant à l'index 6 jusqu'à la fin.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Trouvez la sous-chaîne du texte « Hello World » commençant à l'indice 0 et s'étendant sur 2 caractères.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
