---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Returnerer den første position i tekstværdien for et af de viste tegn (-1, hvis den ikke blev fundet).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Returnerer den første position af et vilkårligt tegn på listen `characters`, der findes i `text`. En valgfri parameter `occurrence` kan bruges til at angive, hvilken position for forekomsten, der skal returneres.


## Examples

### Example #1
Find den første position for "W" eller "H" i teksten "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Find alle positionerne for "W" eller "H" i teksten "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
