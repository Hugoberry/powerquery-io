---
title: Text.PadEnd
---

# Text.PadEnd


Retourne le texte d'une longueur spécifiée en remplissant la fin d'un texte donné.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Retourne une valeur `text` remplie jusqu'à la longueur `count` en insérant des espaces à la fin de la valeur de texte `text`. Un caractère facultatif `character` peut être utilisé pour spécifier le caractère utilisé pour le remplissage. Le caractère de remplissage par défaut est un espace.


## Examples

### Example #1
Remplissez la fin d'une valeur de texte, pour qu'elle soit longue de 10 caractères.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Remplissez la fin d'une valeur de texte avec « | », pour qu'elle soit longue de 10 caractères.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
