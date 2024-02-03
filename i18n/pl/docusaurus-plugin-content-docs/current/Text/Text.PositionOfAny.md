---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Zwraca pierwszą pozycję dowolnego wymienionego znaku w wartości tekstowej lub -1, jeśli znak nie zostanie znaleziony.


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Zwraca pierwszą pozycję dowolnego znaku na liście <code>characters</code> znajdującego się w klasie <code>text</code>.    Opcjonalny parametr <code>occurrence</code> może służyć do określenia pozycji wystąpienia do zwrócenia.


## Examples

### Example #1 
Znajdź pierwszą pozycję litery „W” lub „Ś” w tekście „Witaj, świecie!”.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Znajdź wszystkie położenia liter „W” lub „Ś” w tekście „Witaj, świecie”&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
