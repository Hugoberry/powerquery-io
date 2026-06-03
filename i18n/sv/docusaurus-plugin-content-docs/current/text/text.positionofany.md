---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Returnerar den första positionen i textvärdet för något tecken i listan (-1 om inget hittas).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Returnerar den första positionen för ett tecken i listan `characters` som finns i `text`. En valfri parameter `occurrence` kan användas för att ange vilken förekomstposition som ska returneras.


## Examples

### Example #1
Hitta den första positionen för "W" eller "H" i texten "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Hitta alla positioner för "W" eller "H" i texten "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
