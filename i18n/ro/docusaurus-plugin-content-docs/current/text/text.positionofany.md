---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Returnează prima poziţie în valoarea text a oricărui caracter listat (-1 dacă nu se găseşte).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Returnează prima poziție a oricărui caracter din lista `characters` care este găsită în `text`. Se poate utiliza un parametru opțional `occurrence` pentru a specifica ce poziție de apariție să se returneze.


## Examples

### Example #1
Găsiți prima poziție „W” sau „H” în textul „Hello, World!”.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Găsiți toate pozițiile „W” sau „H” în textul „Hello, World!”.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
