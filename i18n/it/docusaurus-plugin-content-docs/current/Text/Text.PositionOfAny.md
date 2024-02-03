---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Restituisce la prima posizione nel valore di testo di un carattere elencato (-1 se non trovata).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Restituisce la prima posizione di qualsiasi carattere nell'elenco <code>characters</code> presente in <code>text</code>.
    È possibile utilizzare un parametro facoltativo <code>occurrence</code> per specificare la posizione dell'occorrenza da restituire.


## Examples

### Example #1 
Trovare la prima posizione di &#34;W&#34;o &#34;H&#34; nel testo &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Trovare tutte le posizioni di &#34;W&#34; o &#34;H&#34; nel testo &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
