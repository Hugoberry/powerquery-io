---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Restituisce la prima posizione nel valore di testo di un carattere elencato (-1 se non trovata).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Restituisce la prima posizione di qualsiasi carattere nell'elenco `characters` presente in `text`. È possibile utilizzare un parametro facoltativo `occurrence` per specificare la posizione dell'occorrenza da restituire.


## Examples

### Example #1
Trovare la prima posizione di "W"o "H" nel testo "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Trovare tutte le posizioni di "W" o "H" nel testo "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
