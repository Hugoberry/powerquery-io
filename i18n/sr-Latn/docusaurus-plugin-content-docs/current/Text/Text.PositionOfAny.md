---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Vraća prvi položaj u tekstualnoj vrednosti za bilo koji navedeni znak (ako se ne pronađe, vraća se -1).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Vraća prvi položaj bilo kog znaka na listi <code>characters</code> koji se nalazi u <code>text</code>.
    Opcionalni parametar <code>occurrence</code> može da se koristi za navođenje pozicije pojavljivanja za vraćanje.


## Examples

### Example #1 
Pronađite prvi položaj slova „W“ ili „H“ u tekstu „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Pronađite sve položaje slova „W“ ili „H“ u tekstu „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
