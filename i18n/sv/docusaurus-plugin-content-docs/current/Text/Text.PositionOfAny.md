---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Returnerar den första positionen i textvärdet för något tecken i listan (-1 om inget hittas).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Returnerar den första positionen för ett tecken i listan <code>characters</code> som finns i <code>text</code>.
    En valfri parameter <code>occurrence</code> kan användas för att ange vilken förekomstposition som ska returneras.


## Examples

### Example #1 
Hitta den första positionen för &#34;W&#34; eller &#34;H&#34; i texten &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Hitta alla positioner för &#34;W&#34; eller &#34;H&#34; i texten &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
