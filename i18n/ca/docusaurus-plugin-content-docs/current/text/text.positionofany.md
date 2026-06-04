---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Retorna la primera posició del valor de text de qualsevol caràcter de la llista (-1 si no es troba).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Retorna la primera posició de qualsevol dels caràcters de la llista `characters` que es trobi a `text`. Es pot utilitzar un paràmetre opcional `occurrence` per especificar quina posició d'aparició cal retornar.


## Examples

### Example #1
Troba la primera posició de "W" o "H" al text "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Troba la posició de "W" o "H" al text "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
