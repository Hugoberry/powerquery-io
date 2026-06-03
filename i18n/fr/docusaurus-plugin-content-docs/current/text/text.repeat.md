---
title: Text.Repeat
---

# Text.Repeat


Retourne une valeur de texte composée du texte d'entrée répété un nombre spécifié de fois.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Retourne une valeur de texte composée du texte d'entrée `text` répété `count` fois.


## Examples

### Example #1
Répète le texte « a » cinq fois.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Répète le texte « helloworld » trois fois.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
