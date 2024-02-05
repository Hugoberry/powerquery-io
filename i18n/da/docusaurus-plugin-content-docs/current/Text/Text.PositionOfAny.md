---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Returnerer den første position i tekstværdien for et af de viste tegn (-1, hvis den ikke blev fundet).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Returnerer den første position af et vilkårligt tegn på listen <code>characters</code>, der findes i <code>text</code>.    En valgfri parameter <code>occurrence</code> kan bruges til at angive, hvilken position for forekomsten, der skal returneres.


## Examples

### Example #1 
Find den første position for &#34;W&#34; eller &#34;H&#34; i teksten &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Find alle positionerne for &#34;W&#34; eller &#34;H&#34; i teksten &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
