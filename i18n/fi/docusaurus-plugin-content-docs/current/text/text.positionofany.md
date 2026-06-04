---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Palauttaa minkä tahansa luettelossa olevan merkin tekstiarvon ensimmäisen sijainnin (-1, jos sitä ei löydy).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Palauttaa minkä tahansa merkin ensimmäisen sijainnin luettelossa `characters`, joka löytyy kohteesta `text`. Valinnaista parametria `occurrence` voidaan käyttää määrittämään palautettava esiintymäsijainti.


## Examples

### Example #1
Selvitä merkin "W" tai "H" ensimmäinen sijainti tekstissä "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Selvitä merkin "W" tai "H" sijainnit tekstissä "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
