---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Palauttaa minkä tahansa luettelossa olevan merkin tekstiarvon ensimmäisen sijainnin (-1, jos sitä ei löydy).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Palauttaa minkä tahansa merkin ensimmäisen sijainnin luettelossa <code>characters</code>, joka löytyy kohteesta <code>text</code>.    Valinnaista parametria <code>occurrence</code> voidaan käyttää määrittämään palautettava esiintymäsijainti.


## Examples

### Example #1 
Selvitä merkin &#34;W&#34; tai &#34;H&#34; ensimmäinen sijainti tekstissä &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Selvitä merkin &#34;W&#34; tai &#34;H&#34; sijainnit tekstissä &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
