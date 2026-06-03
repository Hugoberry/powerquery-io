---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Retourne la première position dans la valeur de texte de n'importe quel caractère répertorié (- 1 si introuvable).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Retourne la première position de n'importe quel caractère dans la liste `characters` trouvée `text`. Un paramètre facultatif `occurrence` peut être utilisé pour spécifier la position d'occurrence à retourner.


## Examples

### Example #1
Recherchez la première position de "W" ou "H" dans le texte "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Recherchez toutes les positions de "W" ou "H" dans le texte "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
